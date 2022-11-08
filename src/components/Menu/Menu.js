import React from "react";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <div className="bg-white">
      <ul className={styles.list}>
        <li>
          <a href="#" className={styles.listItem}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className={styles.listItem}>
            Oferty
          </a>
        </li>
        <li>
          <a href="#" className={styles.listItem}>
            Ceny
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
