import React from "react";
import styles from "./NavButton.module.css";

export default function NavButton({ title }) {
  return (
    <button className={styles.contactButton}>
      <p>{title}</p>
    </button>
  );
}
