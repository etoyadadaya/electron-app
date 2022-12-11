import React, { useState } from "react";
import styles from "./notes.module.scss";

export const Notes = () => {
  const [todos, setTodos] = useState();

  return (
    <div className={styles.container}>
      <h1>Notes</h1>
    </div>
  );
};
