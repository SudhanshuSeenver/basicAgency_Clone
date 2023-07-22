import React from "react";
import styles from "./AwardCard.module.css";

function AwardCard({ data }) {
  const { name, Logo, text } = data;
  //   console.log(Logo);
  return (
    <a href="#" className={styles.card}>
      {name}
      <Logo />
      {text}
    </a>
  );
}

export default AwardCard;
