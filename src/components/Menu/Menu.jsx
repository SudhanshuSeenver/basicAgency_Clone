import React, { useState } from "react";
import styles from "./Menu.module.css";
import Button from "../Button/Button";
import { MdOutlineArrowForwardIos, MdOutlineClose } from "react-icons/md";
import { ReactComponent as BD_Logo } from "../../assets/images/logo.svg";
// import { inititives }
function Menu({ showMenu, closeMenu, ...props }) {
  const menuToggleClass = showMenu ? styles.open_menu_ct : styles.close_menu_ct;

  const menu_listData = [
    "WORK",
    "ABOUT",
    "NEWS",
    "THINKING",
    "CAREERS",
    "CONTACT",
  ];
  //   useEffect();

  function handleClose(e) {
    closeMenu();
  }
  return (
    <div className={`${styles.menu_ct} ${menuToggleClass}`}>
      <div className={styles.menu_head}>
        <figure className={styles.menu_logo}>
          <BD_Logo />
        </figure>

        <Button onClick={handleClose} custCls={styles.btn_men}>
          <MdOutlineClose />
        </Button>
      </div>
      <div className={styles.menu_nav}>
        <ul className={styles.menu_navList}>
          {menu_listData.map((data) => (
            <li key={data}>
              <a href="#">{data}</a>
            </li>
          ))}
          <li>
            <Button custCls={styles.menuInitiatives_btn}>
              INITIATIVES
              <span>
                <MdOutlineArrowForwardIos />
              </span>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
