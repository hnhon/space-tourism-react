import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../asset/starlogo.svg";
import styles from "../style/nav.module.scss";

function Nav() {
  let activeStyle = {
    borderBottom: "3px solid white",
    paddingBottom: "0",
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.logocontainer}>
        <img className={styles.logo} src={logo} alt="log" />
      </div>

      <ul className={styles.linkscontainer}>
        <li>
          <NavLink to="/" className={styles.link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/des"
            className={styles.link}
          >
            Destination
          </NavLink>
        </li>
        <li>
          <NavLink to="/crew" className={styles.link}>
            Crew
          </NavLink>
        </li>
        <li>
          <NavLink to="/technology" className={styles.link}>
            Technology
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
