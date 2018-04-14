import React, { Component } from "react";
import Slider from "react-slick";
import Willy from "src/resources/images/willy.jpg";

export default class slideShow extends React.Component {
    constructor() {
        super();
        this.state = {
          width:  800,
          height: 182
        }
      }
    
  updateDimensions() {
    this.setState({ width: window.innerHeight, height: window.innerWidth });
    console.log("Width: " + window.innerWidth + "\nHeight: " + window.innerHeight)
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
    
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }


  render() {
    var settings = {
      speed: 500,
      accessibility: true,
      slidesToScroll: 1,
      initialSlide: 0
    };
    return (
       
      <div style={{maxHeight:this.state.height,maxWidth:this.state.width-100,margin:'auto'}}>
        <Slider {...settings}>
          <div>
            <h3><img className="img-fluid mx-auto d-block" src={Willy}/></h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
