import React from "react";
import {connect} from "react-redux";
import classNames from "classnames";
import Link from "pawjs/src/components/link";

const Header = (props) => {
  return (
    <div className="container">
      <Link className="m-2" to="/">Logo</Link>
      <ul className="nav d-inline-flex">
        <li className="nav-item">
          <Link
            className={classNames("nav-link", {active: props.url === "/"})}
            to="/"
          >
            Home <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={classNames("nav-link", {active: props.url === "/about"})}
            to="/about"
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={classNames("nav-link", {active: props.url === "/landing"})}
            to="/landing"
          >
            Landing
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={classNames("nav-link", {active: props.url === "/present"})}
            to="/present"
          >
            Present
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={classNames("nav-link", {active: props.url === "/slideshow"})}
            to="/slideshow"
          >
            Slideshow
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={classNames("nav-link", {active: props.url === "/control"})}
            to="/control"
          >
            Control
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default connect(state => { return {url: state.router.location.pathname}; })(Header);
