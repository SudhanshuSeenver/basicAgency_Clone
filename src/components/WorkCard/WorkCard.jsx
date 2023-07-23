import React from "react";
import styles from "./WorkCard.module.css";

function WorkCard({ work, ...props }) {
  const { name, imgSrc, vidSrc, text } = work;
  return (
    <div className={styles.card}>
      <a className={styles.card_link} {...props} href="#">
        <div>
          {imgSrc && <img src={imgSrc} alt={name} />}
          {vidSrc && <video src={vidSrc} loop autoPlay muted />}
        </div>
        <div>
          <h4>{name}</h4>
          <p>{text}</p>
        </div>
      </a>
    </div>
  );
}

export default WorkCard;
