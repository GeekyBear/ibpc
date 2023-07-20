import React from "react";
import styles from "./NextMessage.module.css";
import UpcomingEvent from "../UpcomingEvent/UpcomingEvent";

export default function NextMessage() {
  return (
    <div className={styles.container}>
      <label>Proximos mensajes</label>
      <h2>ve y forma parte de algo asombroso</h2>
      <UpcomingEvent />
    </div>
  );
}
