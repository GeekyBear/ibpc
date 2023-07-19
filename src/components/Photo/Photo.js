import React from "react";
import styles from "./Photo.module.css";

export default function Photo({ path, position }) {
  return (
    <div className={styles.container}>
      <img src={path} alt="Name of photo" style={{ marginTop: position }} />
    </div>
  );
}
