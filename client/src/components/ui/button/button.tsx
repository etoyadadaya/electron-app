import React, { FC, HTMLProps } from "react";
import styles from "./button.module.scss";

interface Button extends HTMLProps<HTMLButtonElement> {
  variant?: "primary";
}

export const Button: FC<Button> = ({children, variant, onClick}) => (
  <button
    className={styles.primary}
    onClick={onClick}
  >
    {children}
  </button>
);
