import React from "react";
import * as styles from "./footer.scss";

const Footer = () => {
  "use strict";
  return (
    <footer className={styles.footer} >
      <div className="container">
        <span>
          Developed by Evan Wunder &amp; Brandon James
        </span>
      </div>
    </footer>
  );
};

export default Footer;