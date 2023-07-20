import React from "react";
import styles from "./UpcomingEvent.module.css";
import { MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function UpcomingEvent() {
  return (
    <div className={styles.container}>
      <div className={styles.event}>
        <div className={styles.info}>
          <div className={styles.dateContainer}>
            <label className="cap03">Proximo evento</label>
            <div className={styles.date}>
              <h5>20</h5>
              <label>Julio</label>
            </div>
          </div>
          <div className={styles.content}>
            <h5>Escucha nuestros mensajes en vivo</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <div className={styles.dayplace}>
              <ClockIcon width={20} height={20} />
              <div>
                <p>Domingo 18hs</p>
              </div>
            </div>
            <div className={styles.dayplace}>
              <MapPinIcon width={20} height={20} />
              <div>
                <p>Machain 1277, Rosario, Santa FE</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.photo}></div>
      </div>
      <div className={styles.seeMore}>
        <p>Ver todos los mensajes</p>
        <img
          className={styles.arrow}
          src={require("../../assets/images/arrow.png")}
          alt="arrow"
        />
      </div>
    </div>
  );
}
