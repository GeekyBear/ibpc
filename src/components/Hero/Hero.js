import React from "react";
import styles from "./Hero.module.css";
import NavButton from "../NavButton/NavButton";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.holder}>
        <h5>BIENVENIDOS A NUESTRA IGLESIA</h5>
        <h1>SE PARTE DEL CUERPO DE CRISTO</h1>
        <NavButton title={"Conocer mas"} />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
      </div>
    </div>
  );
}
