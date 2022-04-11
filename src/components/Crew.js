import React from "react";
import styles from "../style/crew.module.scss";
import datas from "../data/data.json";
import { useEffect, useState } from "react";

function Crew() {
  const arr = datas.crew;
  const [name, setName] = useState(arr[0].name);
  const [role, setRole] = useState(arr[0].role);
  const [description, setDescription] = useState(arr[0].bio);
  const imgPathName = name.replace(/\s/g, "-").toLowerCase();
  const [selected, setSelected] = useState(arr[0].name);
  const handleOnClick = (data) => {
    let obj = arr.find((o) => o.name === data);
    setName(obj.name);
    setDescription(obj.bio);
    setRole(obj.role);
    setSelected(obj.name);
  };

  return (
    <div className="pageContainer">
      <div className="grid">
        <div className="pageTitle">
          <span>02</span>Meet Your Crew
        </div>
        <div className={`imgContainer ${styles.imgContainer}`}>
          <img src={require(`../asset/image-${imgPathName}.png`)}></img>
        </div>
        <div className={styles.textArea}>
          <div>
            <div>{role}</div>
            <div>{name}</div>
            <div>{description}</div>
          </div>

          <ul className={styles.links}>
            {arr.map((o) => {
              return (
                <li
                  key={o.name}
                  onClick={() => handleOnClick(o.name)}
                  className={
                    selected === o.name
                      ? ` ${styles.selected} ${styles.link}`
                      : `${styles.link}`
                  }
                ></li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Crew;
