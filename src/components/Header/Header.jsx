import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as ThreeDots } from "../../assets/images/threeDots2.svg";
import Button from "../Button/Button";
import Menu from "../Menu/Menu";

function Header({ navH, innerWidth, ...props }) {
  const [showMenu, setShowMenu] = useState(false);
  const screenMenu = innerWidth < 1280 ? true : false;

  // function makeResponsiveHeader() {
  //   setScreenMenu(innerWidth < 1023 ? true : false);
  // }

  function openMenu() {
    setShowMenu(true);
  }
  function closeMenu() {
    setShowMenu(false);
  }

  return (
    <header className={styles.header_ct} ref={navH} {...props}>
      <div className={styles.logo_bd}>
        <a href="#">
          <Logo />
        </a>
      </div>

      {!screenMenu ? (
        <>
          <ul className={styles.nav_links_list}>
            <li className={styles.nv_link}>
              <a href="#">Work</a>
            </li>
            <li className={styles.nv_link}>
              <a href="#">About</a>
            </li>
            <li className={styles.nv_link}>
              <a href="#">News</a>
            </li>
            <li className={styles.nv_link}>
              <a href="#">Thinking</a>
            </li>
            <li className={styles.nv_link}>
              <a href="#">Careers</a>
            </li>
            <li className={styles.nv_link}>
              <a href="#">Contact</a>
            </li>
          </ul>

          <Button onClick={(e) => openMenu()} custCls={styles.initiative_btn}>
            <ThreeDots className={styles.initiative_btn_svg} />
          </Button>
        </>
      ) : (
        <Button onClick={(e) => openMenu()}>
          <span className={styles.menuBtn_txt}>Menu</span>
        </Button>
      )}
      <Menu closeMenu={closeMenu} showMenu={showMenu} innerWidth={innerWidth} />
    </header>
  );
}

export default Header;
