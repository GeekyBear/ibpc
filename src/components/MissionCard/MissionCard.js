import React from "react";
import styles from "./MissionCard.module.css";
import NavButton from "../NavButton/NavButton";

export default function MissionCard() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h2>Queremos servir a todos en el mundo</h2>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </p>
        <NavButton title={"Ver misiones"} />
      </div>
      <div className={styles.image}>
        <img src={require("../../assets/images/quote.png")} alt="quote" />
      </div>
    </div>
  );
}
