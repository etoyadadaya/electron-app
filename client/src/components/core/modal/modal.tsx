import React, {FC, HTMLProps} from "react";
import styles from "./modal.module.scss";

interface IModal extends HTMLProps<HTMLElement> {}

export const Modal: FC<IModal> = ({children, onClick}) => {
  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <button className={styles.exit} onClick={onClick}>X</button>
        <div className={styles.body}>
          {children}
        </div>
      </div>
    </div>
  );
};
