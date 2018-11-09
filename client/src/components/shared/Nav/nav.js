import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import Dropdown from "../../Dropdown/";

const Nav = props => (
  <nav id="topNav">
    {/* Dropdown structure */}
    {/* <ul id="dropdown1" className="dropdown-content">
      <li>
        <a href="#!">one</a>
      </li>
      <li>
        <a href="#!">two</a>
      </li>
      <li className="divider" />
      <li>
        <a href="#!">three</a>
      </li>
    </ul> */}
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
        <Dropdown
          name={`${props.user.firstName} ${props.user.lastName}`}
          handleLogout={props.handleLogout}
        />
      </div>
    )}
  </nav>
);

export default Nav;
