import React from "react";
import styles from "./Missions.module.css";
import MissionCard from "../MissionCard/MissionCard";

export default function Missions() {
  return (
    <div className={styles.container}>
      <MissionCard />
      <div className={styles.decorativeLine}></div>
    </div>
  );
}
