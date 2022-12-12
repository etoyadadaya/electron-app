import React, { useState } from "react";
import styles from "./hello.module.scss";
import { Input } from "../../components/ui/input/input";
import { Button } from "../../components/ui/button/button";
import { useSetRecoilState } from "recoil";
import { auth, user } from "../../store";
import { useApiCall } from "../../hooks/useApiCall/useApiCall";
import { useForm } from "react-hook-form";
import { useTokenizedApiCall } from "../../hooks/useTokenizedApiCall/useTokenizedApiCall";
import { User } from "../../types";
import { UserCache } from "../../services";
import useRequireNotAuth from "../../hooks/useRequireNotAuth/useRequireNotAuth";

export const Hello = () => {
  useRequireNotAuth("/profile");
  const authHost = useTokenizedApiCall();
  const apiCall = useApiCall();
  const setAuth = useSetRecoilState(auth);
  const setUser = useSetRecoilState(user);
  const [signIn, setSignIn] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const submit = handleSubmit((data) => {
    apiCall
      .post(signIn ? "/auth/registration" : "auth/login", data)
      .then((res) => {
        getUser(res.data.access_token);
      });
  });

  const getUser = (token: string) => {
    setAuth({
      isAuth: true,
      isLoading: true,
      // @ts-ignore
      token: token,
    });
    setTimeout(() => {
      authHost.get<User>("/users").then((res) => {
        UserCache.setStore({
          id: res.data.id,
          email: res.data.email,
        });
        setUser({
          // @ts-ignore
          id: res.data.id,
          // @ts-ignore
          email: res.data.email,
        });
        setAuth({
          isAuth: true,
          isLoading: false,
          // @ts-ignore
          token: token,
        });
      });
    }, 0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.welcome}>Welcome Back!</h1>
        <form onSubmit={submit} className={styles.wrap}>
          <Input
            register={register("email", {
              required: "Required field",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalid email",
              },
            })}
            placeholder="Enter your email"
          />
          <Input
            register={register("password", {
              required: "Required field",
              minLength: {
                value: 8,
                message: "Min 8 characters",
              },
              maxLength: {
                value: 50,
                message: "Max 50 characters",
              },
              pattern: {
                value:
                  /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                message: "Invalid password",
              },
            })}
            placeholder="Enter your password"
          />
          <div className={styles.buttons}>
            <Button type={"submit"} variant="primary">
              {signIn ? "Registration" : "Login"}
            </Button>
            <div className={styles.switch}>
              <p className={styles.needAcc}>
                {!signIn ? "Need an account?" : "Already have account?"}
              </p>
              <Button onClick={() => setSignIn(!signIn)} variant="switch">
                {!signIn ? "Registration" : "Login"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
