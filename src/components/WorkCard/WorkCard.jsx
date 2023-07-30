import React from "react";
import styles from "./WorkCard.module.css";

function WorkCard({ work, ...props }) {
  const { name, imgSrc, vidSrc, text } = work;
  return (
    <div className={styles.card}>
      <a className={styles.card_link} {...props} href="#">
        <div className={styles.card_media}>
          {imgSrc && <img className={styles.card_img} src={imgSrc} alt={name} />}
          {vidSrc && <video className={styles.card_vid} src={vidSrc} loop autoPlay muted />}
        </div>
        <div className={styles.card_info}>
          <h4>{name}</h4>
          <p>{text}</p>
        </div>
      </a>
    </div>
  );
}

export default WorkCard;
