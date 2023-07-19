import React from "react";
import IntroSquare from "../IntroSquare/IntroSquare";
import styles from "./Intro.module.css";

const titles = [
  {
    icon: "Building",
    title: "Sobre Nosotros",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "Globe",
    title: "Participa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "Signal",
    title: "Misiones",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
export default function Intro() {
  return (
    <div className={styles.container}>
      <label>Sub-Headline</label>
      <h2>UNA IGLESIA QUE ES RELEVANTE</h2>
      <div className={styles.squares}>
        {titles.map((square, index) => (
          <IntroSquare key={index} square={square} />
        ))}
      </div>
    </div>
  );
}
