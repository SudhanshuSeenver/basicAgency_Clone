import React from "react";
import styles from "./AwardCard.module.css";

function AwardCard({ data }) {
  const { name, Logo, text } = data;
  //   console.log(Logo);
  return (
    <a href="#" className={styles.card} id={name}>
      <figure className={styles.brand_logo}>
        <Logo />
      </figure>
      <p className={styles.award_desc}>{text}</p>
    </a>
  );
}

export default AwardCard;
