import React, { useState } from "react";
import styles from "./Menu.module.css";
import Button from "../Button/Button";
import { MdOutlineArrowForwardIos, MdOutlineClose } from "react-icons/md";
import { ReactComponent as BD_Logo } from "../../assets/images/logo.svg";
import { initiatives_data } from "../../helpers/data";
import InitiativeCards from "../InitiativeCards/InitiativeCards";
// import { inititives }
function Menu({ showMenu, closeMenu, innerWidth, ...props }) {
  const menuToggleClass = showMenu ? styles.open_menu_ct : styles.close_menu_ct;
  const showCarousel = innerWidth > 1280 ? true : false;

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
      {showCarousel ? (
        <div className={styles.initiatives_Ct}>
          <ol className={styles.initiatives_list}>
            {initiatives_data.map((data, i) => {
              return (
                <li key={data.name}>
                  <InitiativeCards
                    data={data}
                    lastOfType={i + 1 === initiatives_data.length}
                    ithVal={i + 1}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default Menu;
