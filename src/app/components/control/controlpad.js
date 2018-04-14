import React, { Component } from "react";
import * as styles from "./controlPad.scss";

export default class controlPad extends React.Component {
  render() {

    console.log("Attempting to create pad");
    return (
        
    <div className={styles.main}>
        <div className={styles.square}>
          <div className={styles.quarter + ' ' + styles.quarter1} id="q1">
            <div className={styles.chevron + ' ' + styles.top}/>
          </div>
          <div className={styles.quarter + ' '+  styles.quarter2} id="q2">
            <div className={styles.chevron + ' ' + styles.right} />
          </div>
          <div className={styles.quarter + ' ' + styles.quarter3} id="q3">
            <div className={styles.chevron + ' ' + styles.left} />
          </div>
          <div className={styles.quarter + ' ' + styles.quarter4} id="q4">
            <div className={styles.chevron + ' ' + styles.bottom} />
          </div>
          <div className={styles.rating} id="rating" />
        </div>
      </div>
    
    );
  }
}
