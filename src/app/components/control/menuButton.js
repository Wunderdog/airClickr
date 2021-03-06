import React, { Component } from "react";
import {Motion, spring} from 'react-motion';
import "./menubutton.scss";

export default class MenuButton extends React.Component {

  
  constructor(props) {
    super(props);

    this.state = {
      flyOutRadius: 50,
      seperationAngle: 50,
      mainButtonDiam: 50,
      childButtonDiam: 40,
      numElements: 3,
      stiffness: 200,
      damping: 17,
      rotation: -45,
      mainButtonIcon: "bars",
      mainButtonIconSize: "lg",
      childButtonIconSize: "lg"
    };
  }
  toRadians(degrees) {
    return degrees * DEG_TO_RAD;
  }
  toggleMenu() {
    let { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  }

  getMainButtonStyle() {
    let { mainButtonDiam } = this.props;
    return {
      width: mainButtonDiam,
      height: mainButtonDiam
    };
  }

  getInitalChildButtonStyle() {
    let { childButtonDiam, mainButtonDiam, stiffness, damping } = this.props;
    return {
      width: childButtonDiam,
      height: childButtonDiam,
      zIndex: -1,
      top: spring(mainButtonDiam / 2 - childButtonDiam / 2, {
        stiffness,
        damping
      }),
      left: spring(mainButtonDiam / 2 - childButtonDiam / 2, {
        stiffness,
        damping
      })
    };
  }

  getFinalChildButtonStyle(index) {
    let { childButtonDiam, mainButtonDiam, stiffness, damping } = this.props;
    let { deltaX, deltaY } = this.getFinalDeltaPositions(index);
    return {
      width: childButtonDiam,
      height: childButtonDiam,
      zIndex: spring(0),
      top: spring(mainButtonDiam / 2 + deltaX, { stiffness, damping }),
      left: spring(mainButtonDiam / 2 - deltaY, { stiffness, damping })
    };
  }

  getFinalDeltaPositions(index) {
    let NUM_CHILDREN = this.props.elements.length;
    let CHILD_BUTTON_DIAM = this.props.childButtonDiam;
    let FLY_OUT_RADIUS = this.props.flyOutRadius;
    let SEPARATION_ANGLE = this.props.seperationAngle;
    let ROTATION = this.props.rotation;
    let FAN_ANGLE = (NUM_CHILDREN - 1) * SEPARATION_ANGLE;
    let BASE_ANGLE = (180 - FAN_ANGLE) / 2 + 90 + ROTATION;

    let TARGET_ANGLE = BASE_ANGLE + index * SEPARATION_ANGLE;
    return {
      deltaX:
        FLY_OUT_RADIUS * Math.cos(toRadians(TARGET_ANGLE)) -
        CHILD_BUTTON_DIAM / 2,
      deltaY:
        FLY_OUT_RADIUS * Math.sin(toRadians(TARGET_ANGLE)) +
        CHILD_BUTTON_DIAM / 2
    };
  }

  getCProps() {
    return {
      mainButtonProps: () => ({
        className: "button-menu",
        style: this.getMainButtonStyle(),
        onClick: this.toggleMenu
      }),
      childButtonProps: (style, onClick) => ({
        className: "button-child",
        style,
        onClick
      }),
      childButtonMotionProps: (index, isOpen) => ({
        key: index,
        style: isOpen
          ? this.getFinalChildButtonStyle(index)
          : this.getInitalChildButtonStyle()
      }),
      // handle Icons
      childButtonIconProps: name => ({
        className:
          "child-button-icon fa fa-" +
          name +
          " fa-" +
          this.props.childButtonIconSize
      }),
      mainButtonIconProps: name => ({
        className:
          "main-button-icon fa fa-" +
          name +
          " fa-" +
          this.props.mainButtonIconSize
      })
    };
  }

  renderChildButton(item, index) {
    let { isOpen } = this.state;
    let cp = this.getCProps();

    //return <div {...cp.childButtonProps(index, isOpen)}/>;

    return (
      <Motion {...cp.childButtonMotionProps(index, isOpen)}>
        {style => (
          <div {...cp.childButtonProps(style, item.onClick)}>
            <i {...cp.childButtonIconProps(item.icon)} />
          </div>
        )}
      </Motion>
    );
  }
  
  render() {
    let cp = this.getCProps();
    let elements =  [
      {
        icon: "home",
        onClick: () => alert("clicked home")
      },{
        icon: "clock-o",
        onClick: () => alert("clicked clock")
      },{
        icon: "lock",
        onClick: () => alert("clicked lock")
      },{
        icon: "globe",
        onClick: () => alert("clicked globe")
      },{
        icon: "asterisk",
        onClick: () => alert("clicked asterisk")
      },{
        icon: "fighter-jet",
        onClick: () => alert("clicked fighter-jet")
      },{
        icon: "clipboard",
        onClick: () => alert("clicked clipboard")
      },{
        icon: "industry",
        onClick: () => alert("clicked industry")
      },{
        icon: "eye",
        onClick: () => alert("clicked eye")
      }
      
    ];
    let mainButtonIcon = this.state.mainButtonIcon;
    let { isOpen } = this.state;

    return (
      <div className="button-container">
        {elements.map((item, i) => this.renderChildButton(item, i))}
        <div {...cp.mainButtonProps()}>
          <i {...cp.mainButtonIconProps(mainButtonIcon)} />
        </div>
      </div>
    );
  }
}
