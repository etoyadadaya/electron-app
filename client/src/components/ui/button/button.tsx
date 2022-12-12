import React, { FC, HTMLProps } from "react";
import styles from "./button.module.scss";
import clsx from "clsx";

interface Button extends HTMLProps<HTMLButtonElement> {
  variant?: "primary" | "switch" | "close";
}

export const Button: FC<Button> = ({ children, variant, onClick }) => (
  <button
    className={clsx({
      [styles.primary]: variant === "primary",
      [styles.switch]: variant === "switch",
      [styles.close]: variant === "close",
    })}
    onClick={onClick}
  >
    {children}
  </button>
);
