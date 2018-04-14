import React, { Component } from "react";
import PresentButton from "../present/presentButton";
import ControlButton from "../control/controlButton";
import AudienceButton from "../audience/audienceButton";


import DescriptivePhoto from "src/resources/images/phoneToBrowser.svg";
export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{'textAlign':'center'}}>airClickr</h1>
        <img className="img-fluid mx-auto d-block" src={DescriptivePhoto} />
        <div style={{'width':'500px', 'margin':'auto'}}>
            <PresentButton/>
            <ControlButton/> 
            <AudienceButton/>
        </div>
      </div>
    );
  }
}
