import React, { Component } from "react";
import CodeEntry from "../present-code-entry/codeEntry";
import * as styles from "./controlPad.scss";
import MenuButton from "./menuButton";
export default class slideShow extends React.Component {
  render() {
    return (
      <div style={{margin:'auto',width:'500px'}}>
        <CodeEntry />
        {/* <MenuButton/> */}
      </div>
    );
  }
}
