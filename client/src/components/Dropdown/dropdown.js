import React from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className="dropdown right">
        <div className="button" onClick={this.showDropdownMenu}>
          <i className="material-icons left">account_box</i>
          {this.props.name}
          <i className="material-icons right">arrow_drop_down</i>
        </div>

        {this.state.displayMenu ? (
          <ul className="ul-drop">
            <li>
              <Link to="/account">Account Info</Link>
            </li>
            <li>
              <Link to="/password">Reset Password</Link>
            </li>
            <li onClick={this.props.handleLogout}>
              <a href="#Log Out">Log Out</a>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
