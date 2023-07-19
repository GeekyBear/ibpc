import React from "react";
import "./NavButton.css";

export default function NavButton({ title }) {
  return (
    <button className="contact-button">
      <p>{title}</p>
    </button>
  );
}
