import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import logo from "../asset/starlogo.svg";
import hamburger from "../asset/svg/hamburger.svg";
import close from '../asset/svg/close.svg';
import styles from "../style/nav.module.scss";

function Nav() {
  let activeStyle = {
    borderBottom: "3px solid white",
    paddingBottom: "0",
  };
  const [isActive, setIsActive] = useState (false)
  const handleOnClick = () => {
    setIsActive(!isActive)
  }
  return (
    <div className={styles.navContainer}>
      <div className={styles.logocontainer}>
        <img className={styles.logo} src={logo} alt="log" />
      </div>
      <ul className={isActive? `${styles.linkscontainer} ${styles.active}` : `${styles.linkscontainer}`}>
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
      <img className={isActive? `${styles.active} ${styles.hamburger}` : `${styles.hamburger}`} onClick={handleOnClick} src={!isActive? hamburger: close} alt="hamburger-menu" />
    </div>
  );
}

export default Nav;
