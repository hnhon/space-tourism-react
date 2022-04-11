import React, { useState, useEffect } from "react";
import datas from "../data/data.json";
import styles from "../style/technology.module.scss";

function Technology() {
  const arr = datas.technology;
  const [name, setName] = useState(arr[0].name);
  const [description, setDescription] = useState(arr[0].description);
  const [selected, setSelected] = useState(arr[0].name)
  const imgPathName = name.replace(/\s/g, "-").toLowerCase();
  const handleOnClick = (data) => {
    let obj = arr.find((o) => o.name === data);
    setName(obj.name);
    setDescription(obj.description);
    setSelected (obj.name)
  };

  return (
    <div className="pageContainer">
      <div className="grid">
        <div className="pageTitle">
          <span>03</span>SPACE LAUNCH 101
        </div>
        <div className={`imgContainer ${styles.imgContainer}`}>
          <img
            src={require(`../asset/image-${imgPathName}-portrait.jpg`)}
          ></img>
        </div>
        <div className={styles.textArea}>
          <ul className={styles.links}>
            {arr.map((o, index) => {
              return (
                <li
                  key={o.name}
                  className={selected === o.name? `${styles.link} ${styles.selected}` : `${styles.link}`}
                  onClick={() => handleOnClick(o.name)}
                >
                  <span>{index + 1}</span>
                </li>
              );
            })}
          </ul>
          <div className={styles.article}>
            <p className={styles.tag}>THE TERMINOLOGY…</p>
            <div className={styles.name}>{name}</div>
            <div className={styles.description}>{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
