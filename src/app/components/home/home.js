import React, {Component} from "react";
import Fold from "pawjs/src/components/fold";
import ReactLogo from "src/resources/images/reactjs.svg";
import SmallImage from "src/resources/images/mario-large.png?sizes=100w+200w+400w+800w&placeholder";
import Picture from "pawjs/src/components/picture/picture";
// import axios from "axios";

export default class Home extends Component {
  // initialize state
  state = {
    selectedFile: null
  }

  fileSelectedHandler = event => {
    console.log("file chosen:");
    // select first file in array
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0]
    });
  }

  fileSelectedHandler = () => {
    console.log("POST");  
  }

  render() {
    return (
      <div className="mt-4">
        <img style={{ maxWidth: "150px" }} className="img-fluid mx-auto d-block" src={ReactLogo} alt="ReactJS"/>
        <h1 className="h2 text-center mt-3">React PWA</h1>

        <input type = "file" onChange={this.fileSelectedHandler}/>
        <button onClick={this.fileSelectedHandler}>Upload</button>
       
        <Fold placeholder={() => <div className="text-center mt-3 mb-3">Loading folded content.. Please wait..</div>}>
          
          <p>Image sample converted to webp, uploaded/coded as jpg</p>
          <Picture
            pictureClassName="d-inline-block my-4"
            image={SmallImage}
            alt="Small Image"
            imgClassName="mw-100"
          />
        </Fold>
      </div>
    );
  }
}