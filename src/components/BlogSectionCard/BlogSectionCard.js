import React from "react";
import styles from "./BlogSectionCard.module.css";

export default function BlogSectionCard({ last }) {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <label className="cap03">Categoria</label>
          <h5>TITULO DEL MENSAJE</h5>
          <p>
            Breve descripcion del mensaje: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>
        <div>
          <label>Por Gustavo Sanchez</label>
          <p>13 Mayo de 2023</p>
        </div>
      </div>
      {last ? (
        <div className={styles.bottomLine} />
      ) : (
        <div className={styles.noLine} />
      )}
    </div>
  );
}
