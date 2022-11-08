import React from "react";
import styles from "./Header.module.css";
import Searchbar from "./Searchbar/Searchbar";

function Header(props) {
  return (
    <div className={styles.header}>
      <Searchbar onSearch={props.onSearch} />
    </div>
  );
}

export default Header;
