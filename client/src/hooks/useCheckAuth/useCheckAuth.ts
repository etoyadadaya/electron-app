import { useRecoilState, useSetRecoilState } from "recoil";
import { useTokenizedApiCall } from "../useTokenizedApiCall/useTokenizedApiCall";
import { auth, user } from "../../store";
import { useEffectOnce } from "../useEffectOnce/useEffectOnce";
import { UserCache } from "../../services";
import { Tokens } from "./useCacheAuth.types";
import { User } from "../../types";

export const useCheckAuth = () => {
  const authHost = useTokenizedApiCall();
  const [Auth, setAuth] = useRecoilState(auth);
  const setUser = useSetRecoilState(user);

  useEffectOnce(() => {
    if (UserCache.checkStore()) {
      authHost
        .post<Tokens>("/auth/refresh")
        .then((res) => {
          setAuth({
            isAuth: true,
            isLoading: Auth.isLoading,
            //@ts-ignore
            token: res.data.accessToken,
          });
          if (UserCache.checkStore()) {
            let user: User;
            try {
              user = UserCache.getStore();
            } catch (e) {
              authHost.get<User>("/users").then((res) => {
                user = res.data;
              });
            }
            setUser({
              //@ts-ignore
              id: user.id,
              //@ts-ignore
              email: user.email,
            });
            setAuth({
              isAuth: true,
              isLoading: false,
              token: Auth.token,
            });
          } else {
            authHost
              .get<User>("/users")
              .then((res) => {
                setUser({
                  //@ts-ignore
                  id: res.data.id,
                  //@ts-ignore
                  email: res.data.email,
                });
                UserCache.setStore({
                  id: res.data.id,
                  email: res.data.email,
                } as User);
              })
              .finally(() => {
                setAuth({
                  isAuth: true,
                  isLoading: false,
                  token: Auth.token,
                });
              });
          }
        })
        .catch(() => {
          UserCache.clearStore();
        });
    }
  });
};
