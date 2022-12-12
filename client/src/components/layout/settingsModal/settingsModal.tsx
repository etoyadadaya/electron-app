import React, {FC, HTMLProps} from "react";
import styles from "./settingsModal.module.scss";

interface IModal extends HTMLProps<HTMLElement> {}

export const SettingsModal: FC<IModal> = ({onClick}) => {
  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <button className={styles.exit} onClick={onClick}>X</button>
        <div className={styles.body}>
          <div className={styles.left}>

          </div>
          <div className={styles.right}>

          </div>
        </div>
      </div>
    </div>
  );
};
