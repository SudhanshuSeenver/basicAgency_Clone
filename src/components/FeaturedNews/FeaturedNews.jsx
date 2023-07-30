import React from "react";
import styles from "./FeaturedNews.module.css";
import { IoArrowForwardSharp } from "react-icons/io5";

function FeaturedNews({ data }) {
  const { imgSrc, title, date } = data;
  return (
    <div className={styles.feat_news}>
      <a href="#">
        <div className={styles.feat_news_img}>
          <figure>
            <img src={imgSrc} alt={title} />
          </figure>
        </div>
        <div className={styles.feat_newsDesc}>
          <h5>{title}</h5>
          <p>
            <span>press</span> {date}
          </p>
          <div className={styles.feat_newsArrow}>
            <IoArrowForwardSharp />
          </div>
        </div>
      </a>
    </div>
  );
}

export default FeaturedNews;
