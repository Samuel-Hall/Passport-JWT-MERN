import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = props => (
  <nav id="topNav">
    {props.isPublic ? (
      <div className="nav-wrapper">
        <a className="brand-logo">Passport-JWT-MERN</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/private">Private View</Link>
          </li>
        </ul>
      </div>
    ) : (
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          Logged in as{" "}
          <strong>
            {props.user.firstName} {props.user.lastName}
          </strong>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a onClick={props.handleLogout}>Log out</a>
          </li>
        </ul>
      </div>
    )}
  </nav>
);

export default Nav;
