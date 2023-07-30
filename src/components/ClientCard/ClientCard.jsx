import React from "react";
import styles from "./ClientCard.module.css";

function ClientCard({ data, ...props }) {
  const { name, Logo, text } = data;

  return (
    <div className={styles.client}>
      <figure className={styles.client_logo}>
        <Logo />
      </figure>
      <h5 className={styles.client_name}>{name}</h5>
      <p className={styles.client_desc}>{text}</p>
    </div>
  );
}

export default ClientCard;
