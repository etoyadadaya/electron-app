import React from "react";
import styles from "./settings.module.scss";
import { NavLink } from "react-router-dom";

export const Settings = () => {
  return (
    <div className={styles.container}>
      <h1>Settings</h1>
      <NavLink to={"/profile"}>Go back</NavLink>
    </div>
  );
};
