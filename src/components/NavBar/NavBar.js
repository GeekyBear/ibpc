import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import NavButton from "../NavButton/NavButton";

export default function NavBar({ title }) {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h2>IBPC</h2>
      </div>
      <div className={styles.links}>
        <div>
          <Link className={styles.link} to={"/"}>
            Home
          </Link>
          <Link className={styles.link} to={"/about"}>
            Sobre nosotros
          </Link>
          <Link className={styles.link} to={"/messages"}>
            Mensajes
          </Link>
          <Link className={styles.link} to={"/blog"}>
            Blog
          </Link>
        </div>
        <NavButton title={title} className={styles.button} />
      </div>
    </div>
  );
}
