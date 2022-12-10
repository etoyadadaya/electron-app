import React, { FC } from "react";
import styles from "./profile.module.scss"
import {useRecoilValue} from "recoil";
import {auth} from "../../store";

const Profile: FC = () => {
  const {token} = useRecoilValue(auth);
  return (
    <div className={styles.container}>
      <h1>{token}</h1>
    </div>
  );
};

export default Profile;
