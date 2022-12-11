import React, { FC, HTMLProps } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./input.module.scss";

interface Input extends HTMLProps<HTMLInputElement> {
  placeholder: string;
  register: UseFormRegisterReturn;
  variant?: "primary";
}

export const Input: FC<Input> = ({
  placeholder,
  children,
  variant,
  register,
}) => (
  <input className={styles.primary} placeholder={placeholder} {...register}>
    {children}
  </input>
);
