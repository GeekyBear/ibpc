import React from "react";
import styles from "./MessageRect.module.css";

export default function MessageRect({ path }) {
  return (
    <div className={styles.container}>
      <img src={path} alt="message" />
    </div>
  );
}
