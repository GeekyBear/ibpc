import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import NavButton from "../NavButton/NavButton";

export default function Footer({ title }) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h3>IBPC</h3>
        <p>© Copyright Reactive Code 2023</p>
        <p>+54 9341 4727878</p>
        <p>Machain 1277</p>
        <p>info@iceparquecasas.com</p>
      </div>
      <div className={styles.quicklinks}>
        <h3>Quicklinks</h3>
        <Link className={styles.link} to={"/about"}>
          Sobre nosotros
        </Link>
        <Link className={styles.link} to={"/services"}>
          Servicios
        </Link>
        <Link className={styles.link} to={"/events"}>
          Eventos
        </Link>
        <Link className={styles.link} to={"/blog"}>
          Blog
        </Link>
      </div>
      <div className={styles.connect}>
        <h3>Connect</h3>
        <div className={styles.socials}>
          <p>Fa</p>
          <p>Tw</p>
          <p>Ld</p>
        </div>
      </div>
      <div className={styles.suscribe}>
        <h4>SUSCRIBETE PARA OBTENER LAS ULTIMAS ACTUALIZACIONES Y NOTICIAS</h4>
        <input className={styles.input} placeholder="Suemail@gmail.com"></input>
        <NavButton title={title} />
      </div>
    </div>
  );
}
