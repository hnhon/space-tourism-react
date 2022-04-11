import React, { useState, useEffect } from "react";
import styles from "../style/des.module.scss";
import datas from "../data/data.json";

function Destination() {
  const arr = datas.destinations;
  const [name, setName] = useState("Moon");
  const [description, setDescription] = useState(
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
  );
  const [distance, setDistance] = useState("384,400 km");
  const [travelTime, setTravelTime] = useState("3 days");
  const [selected, setSelected] = useState('Moon');

  const handleOnClick = (name) => {
    let obj = arr.find((o) => o.name == name);
    setName(obj.name);
    setDescription(obj.description);
    setDistance(obj.distance);
    setTravelTime(obj.travel);
    setSelected (obj.name);
  };

  useEffect (()=>{
    console.log(selected)
  });

  return (
    <div className='pageContainer'>
      <div className={`grid ${styles.grid}`}>
        <div className={`pageTitle ${styles.pageTitle}`}>
          <span>01</span>Pick Your destination
        </div>
        <div className={`imgContainer ${styles.imgContainer}`}>
          <img className={styles.img} src={require(`../asset/image-${name.toLowerCase()}.png`)}></img>
        </div>
        <div className={styles.textArea}>
          <ul className={styles.links}>
            {arr.map(o=>{
              return (
                <li key={o.name} className={`${styles.link} ${selected === o.name? styles.selected: ''}`} onClick={() => handleOnClick(o.name)}>
                  {o.name}
                </li>
              )
            })}
          </ul>
          <div className={styles.destinationName}>{name}</div>
          <div className={styles.text}>
            <div className={styles.content}>{description}</div>
            <div className={styles.infoContainer}>
              <div className={styles.info}>
                <div className={styles.title}>AVG. DISTANCE</div>
                <div className={styles.number}>{distance}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.title}>Est. travel time</div>
                <div className={styles.number}>{travelTime}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
