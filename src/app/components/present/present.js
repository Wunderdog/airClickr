import React, { Component } from "react";
import CodeEntry from "../present-code-entry/codeEntry";
import UploadButton from "../upload/uploadButton";
import DescriptivePhoto from "src/resources/images/phoneToBrowser.svg";
export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{'textAlign':'center'}}>airClickr</h1>
        <img className="img-fluid mx-auto d-block" src={DescriptivePhoto} />
        <div style={{'width':'500px', 'margin':'auto'}}>
            <p>You'll always have a document presenter in the cloud with airClickr. Be a wizard at your next presentation.</p>
            <CodeEntry/>
            <UploadButton/>
        </div>
      </div>
    );
  }
}
