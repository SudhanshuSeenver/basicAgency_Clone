import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as Logo } from "../../assets/logos/B_DLogo.svg";
import { IoArrowForward } from "react-icons/io5";
import Button from "../Button/Button";

function Footer() {
  const socials = ["instagram", "twitter", "linkedIn", "Facebook"];
  const initiatives = [
    "crafted",
    "applied",
    "brandbeats",
    "moves",
    <>B&reg;/Good</>,
  ];
  const offices = [
    "San Diego – CA",
    "New York – NY",
    "Bay Area – CA",
    "St. Louis – MO",
    "Amsterdam – NL",
    "London – EN",
    "Berlin – GE",
    "Argentina – AR",
  ];

  return (
    <footer className={styles.footer_cnt}>
      <div className={styles.content}>
        <div className={styles.row}>
          <div className={styles.col}>
            <figure className={styles.logo}>
              <Logo />
            </figure>
          </div>
          <div className={styles.col}>
            <p>
              We collaborate with ambitious brands and people. Let's build.{" "}
              <a href="mailto:biz@basicagency.com">biz@basicagency.com</a>
            </p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.news_letter}>
            <h5>
              <span>&#11044;</span>stay in the know
            </h5>
            <div className={styles.news_letter_inputBox}>
              <input placeholder="Email Address" type="email" />
              <Button custCls={styles.newsLetter_sbmtBtn}>
                <IoArrowForward />
              </Button>
            </div>
          </div>
          <div className={styles.socials}>
            <h5>
              <span>&#11044;</span>Social
            </h5>
            <ul>
              {socials.map((data) => (
                <li className={styles.socials_item} key={data}>
                  <a href="#">{data}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.initiatives}>
            <h5>
              <span>&#11044;</span>Initiatives
            </h5>
            <ul>
              {initiatives.map((data) => (
                <li className={styles.initiatives_item} key={data}>
                  <a href="#">{data}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.offices}>
            <h5>
              <span>&#11044;</span>Offices
            </h5>
            <ul>
              {offices.map((data) => (
                <li className={styles.offices_item} key={data}>
                  <a href="#">{data}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.privacy_policy}>
        <span>
          BASIC/DEPT&reg;, Inc 10 - {String(new Date().getFullYear()).slice(-2)}
          &copy;
        </span>
        <span>Easy to understand, impossible to ignore.&trade;</span>
        <span className={styles.terms_policy}>
          <a href="#">terms</a>,<a href="#">privacy policy</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
