import React from "react";
import styles from "../style/home.module.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.textArea}>
        <p className={styles.tagline}>So, you want to travel to</p>
        <p className={styles.title}>Space</p>
        <p className={styles.content}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Link to="/des">
          <button className={styles.btn}> EXPLORE</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
