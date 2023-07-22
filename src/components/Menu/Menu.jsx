import React, { useState } from "react";
import styles from "./Menu.module.css";
import Button from "../Button/Button";
import { MdOutlineClose } from "react-icons/md";

function Menu({ showMenu, closeMenu, ...props }) {
  const menuToggleClass = showMenu ? styles.open_menu_ct : styles.close_menu_ct;

  //   useEffect();

  function handleClose(e) {
    closeMenu();
  }
  return (
    <div className={`${styles.menu_ct} ${menuToggleClass}`}>
      <Button onClick={handleClose} custCls={styles.btn_men}>
        <MdOutlineClose />
      </Button>
      asdas
    </div>
  );
}

export default Menu;
