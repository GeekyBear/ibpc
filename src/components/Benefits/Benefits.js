import React from "react";
import styles from "./Benefits.module.css";
import MessageRect from "../MessageRect/MessageRect";

export default function Benefits() {
  return (
    <div className={styles.container}>
      <label>Ver y escuchar</label>
      <h2>Nuestros ultimos mensajes</h2>
      <div className={styles.messages}>
        <MessageRect
          path={require("../../assets/images/man-from-nigeria.png")}
        />
        <MessageRect
          path={require("../../assets/images/man-from-nigeria.png")}
        />
        <MessageRect
          path={require("../../assets/images/man-from-nigeria.png")}
        />
        <MessageRect
          path={require("../../assets/images/man-from-nigeria.png")}
        />
      </div>
    </div>
  );
}
