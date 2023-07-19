import React from "react";
import styles from "./IntroSquare.module.css";
import {
  BuildingLibraryIcon,
  GlobeEuropeAfricaIcon,
  SignalIcon,
} from "@heroicons/react/24/solid";

export default function IntroSquare({ square }) {
  const { icon, title, description } = square;
  return (
    <div>
      <div className={styles.container}>
        {icon === "Building" ? (
          <BuildingLibraryIcon className={styles.icon} />
        ) : icon === "Signal" ? (
          <GlobeEuropeAfricaIcon className={styles.icon} />
        ) : (
          <SignalIcon className={styles.icon} />
        )}
        <h4>{title}</h4>
        <p className={styles.paragraph}>{description}</p>
      </div>
      <div className={styles.bottomline}></div>
    </div>
  );
}
