import React, { Component } from "react";

import styled from "styled-components";
export default class codeEntry extends React.Component {
  render() {
    const Input = styled.input`
      type: text;
      background-color: #6c6c6c;
      color: white;
      border: 1px black;
      border-radius: 3px;
      &::-webkit-input-placeholder {
        color: lightgrey;
      }

    `;

    return (
      <div>
        <div><p style={{float:'left'}}>HAVE A CODE?</p>&nbsp;
        <Input placeholder="Enter presentation code:" /></div>
      </div>
    );
  }
}
