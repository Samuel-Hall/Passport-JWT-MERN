// React Imports
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// Grid Imports
import Row from "../../../components/shared/grid/Row";
// Component Imports
import Nav from "../../../components/shared/Nav";
import Users from "../Users";
import PasswordInfoCard from "../../../components/private/PasswordReset/Card";
import PasswordInfoForm from "../../../components/private/PasswordReset/Form";
//API Imports
import UsersAPI from "../../../utils/usersAPI";
// CSS Imports
import "./password.css";

class Password extends Component {
  constructor() {
    super();
    this.state = {
      password: {
        current: "",
        new: "",
        confirm: ""
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  submitUpdate = event => {
    event.preventDefault();
    console.log("Password data:");
    console.table(this.state.password);
    // Confirm if user wants to continue with updating their data.
    /* if (
      window.confirm(
        "Are you sure you want to update your account information?"
      )
    ) {
      // Get JWT from local storage.
      const token = localStorage.getItem("token");
      const id = this.props.user.id;
      const modUser = this.state.modUser;
      // Data to be sent in PUT request below
      let userData = {};
      // Loop through modUser object and add key/value pairs to userData. If a key has an empty value, do not include it in userData
      for (const key in modUser) {
        if (modUser[key].trim() !== "") {
          console.log("Adding value to userData", key, modUser[key]);
          userData[key] = modUser[key];
        } else {
          console.log("It's nothing");
        }
      }
      console.log("UserData", userData);
      // PUT request to update the user info. Passing in JWT to confirm validity prior to executing DB query.
      UsersAPI.updateUser(id, token, userData).then(res => {
        if (!res.data.error) {
          alert(`Password successfully updated!`);
          window.location.reload();
        } else {
          alert(res.data.error);
        }
      });
    } */
  };

  handleInputChange(event) {
    this.setState({
      password: {
        ...this.state.password,
        [event.target.name]: event.target.value
      }
    });
  }

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
          <PasswordInfoCard
            editMode={this.state.editMode}
            toggleEditMode={this.toggleEditMode}
            user={this.props.user}
            password={this.state.password}
            submitUpdate={this.submitUpdate}
            handleInputChange={this.handleInputChange}
          />
        </Row>
      </div>
    );
  }
}

export default withRouter(Password);
