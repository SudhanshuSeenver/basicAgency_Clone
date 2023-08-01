import React, { useEffect, useRef } from "react";
import styles from "./InitiativeCards.module.css";

function InitiativeCards({ data, lastOfType, ithVal, ...props }) {
  const initiativeRef = useRef(null);
  useEffect(() => {
    if (initiativeRef.current) {
      //   console.log(initiativeRef.current);
      //   console.log(initiativeRef.current.setAttribute);
      initiativeRef.current.setAttribute("data-list-count", "0" + ithVal);
    }
  }, []);
  let classs_container = styles.initiative_item;
  if (lastOfType)
    classs_container = classs_container + " " + styles.last_initiative_item;
  return (
    <div ref={initiativeRef} className={classs_container}>
      <figure>
        <img src={data.imgSrc} alt={data.name} />
      </figure>
      <div className={styles.initiative_about}>
        <div className={styles.initiative_about_bg}></div>
        <div className={styles.initiative_about_head}>
          <h6>
            <span>{data.name}</span>
            <span>&copy;{data.year}</span>
          </h6>
          <p className={styles.initiative_about_label}>{data.label}</p>
        </div>
        <div className={styles.initiative_about_C}>
          <p className={styles.initiative_about_desc}>{data.desc}</p>
          <p className={styles.initiative_about_link}>
            <a href={data.link.href}>{data.link.text}</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default InitiativeCards;
