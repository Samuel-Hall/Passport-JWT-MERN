import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import Dropdown from "../../Dropdown/";

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
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
    ) : (
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          Logged in as <strong>{props.user.username}</strong>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <Dropdown
            name={`${props.user.firstName} ${props.user.lastName}`}
            handleLogout={props.handleLogout}
          />
        </ul>
      </div>
    )}
  </nav>
);

export default Nav;
