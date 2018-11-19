// React Imports
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// Grid Imports
import Row from "../../../components/shared/grid/Row";
// Component Imports
import Nav from "../../../components/shared/Nav";
import Users from "../Users";
import AccountInfoCard from "../../../components/private/AccountInfo/Card";
import AccountInfoForm from "../../../components/private/AccountInfo/Form";
//API Imports
import UsersAPI from "../../../utils/usersAPI";
// CSS Imports
import "./account.css";

class Account extends Component {
  constructor() {
    super();
    this.state = {
      editMode: false,
      // Modified user data, used for updating account information
      modUser: {
        username: "",
        firstName: "",
        lastName: "",
        email: ""
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  submitUpdate = event => {
    event.preventDefault();
    const id = this.props.user.id;
    const modUser = this.state.modUser;
    // Data to be sent in PUT request below
    let userData = { id: id };
    // TODO: Loop through modUser object. If a key has an empty value, do not include it in the user data for the PUT request
    for (const key in modUser) {
      if (modUser[key].trim() !== "") {
        console.log("for in", modUser[key]);
      } else {
        console.log("It's nothing");
      }
    }
  };

  handleInputChange(event) {
    this.setState({
      modUser: {
        ...this.state.modUser,
        [event.target.name]: event.target.value
      }
    });
  }

  toggleEditMode = event => {
    event.preventDefault();
    if (!this.state.editMode) {
      this.setState({ editMode: true });
    } else {
      this.setState({ editMode: false });
    }
  };

  render() {
    return (
      <div>
        <Nav
          isPublic={false}
          loadPage={this.loadPage}
          handleLogout={this.props.handleLogout}
          loggedIn={this.props.loggedIn}
          user={this.props.user}
        />
        <Row>
          <button className="right" onClick={this.toggleEditMode}>
            Make Changes <i className="material-icons">edit</i>
          </button>
          <AccountInfoCard
            editMode={this.state.editMode}
            toggleEditMode={this.toggleEditMode}
            user={this.props.user}
            modUser={this.state.modUser}
            submitUpdate={this.submitUpdate}
            handleInputChange={this.handleInputChange}
          />
        </Row>
      </div>
    );
  }
}

export default withRouter(Account);
