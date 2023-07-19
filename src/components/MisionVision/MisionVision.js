import React from "react";
import styles from "./MisionVision.module.css";
import NavButton from "../NavButton/NavButton";
import Photo from "../Photo/Photo";

export default function MisionVision() {
  return (
    <div className={styles.container}>
      <div>
        <label>Sub-headline</label>
        <h2>Amor y compasión</h2>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <NavButton title={"leer más"} />
      </div>
      <div className={styles.photoHolder}>
        <Photo
          position={"-64px"}
          path={require("../../assets/images/bearded-man-praying.png")}
        />
        <Photo path={require("../../assets/images/man-woman-reading.png")} />
        <Photo
          position={"-64px"}
          path={require("../../assets/images/woman-imposing-hands.png")}
        />
      </div>
      <div className={styles.lowerInfo}>
        <label>Nuestra misión & visión</label>
        <h4>celebra con nosotros</h4>
        <p>
          ¡No te pierdas la oportunidad de conocer más sobre nuestra labor y
          cómo puedes formar parte de esta hermosa misión! Haz clic ahora mismo
          y déjate inspirar por nuestra visión.
        </p>
        <div className={styles.seeMore}>
          <p>Ver más</p>
          <img
            className={styles.arrow}
            src={require("../../assets/images/arrow.png")}
            alt="arrow"
          />
        </div>
      </div>
    </div>
  );
}
