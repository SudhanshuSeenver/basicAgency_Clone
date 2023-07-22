import React from "react";
import styles from "./Button.module.css";

function Button({ primary, custCls, children, ...props }) {
  let classes = `${custCls || ""} ${styles.btn}`;

  if (primary) {
    classes = `${classes} ${styles.primary}`;
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}

export default Button;
