import React from "react";
import Col from "../../shared/grid/Col";
import "./AddUser.css";

const AddUser = props => (
  <Col size="9">
    <form className="addUserForm">
      <h3>Add User</h3>
      <div className="form-group">
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name (required)"
          value={props.newFirstName}
          data-context="newUser"
          onChange={props.handleInputChange}
          placeholder="First Name"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name (required)"
          value={props.newLastName}
          data-context="newUser"
          onChange={props.handleInputChange}
          placeholder="Last Name"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email (optional)"
          value={props.newEmail}
          data-context="newUser"
          onChange={props.handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={props.newUsername}
          data-context="newUser"
          onChange={props.handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          placeholder="Password"
          id="password"
          type="password"
          name="password"
          value={props.newPassword}
          data-context="newUser"
          onChange={props.handleInputChange}
        />
      </div>
      <button
        className="btn"
        disabled={
          !(
            props.newFirstName &&
            props.newLastName &&
            props.newUsername &&
            props.newPassword
          )
        }
        onClick={props.handleSignUp}
        type="submit"
      >
        Create user
      </button>
    </form>
  </Col>
);

export default AddUser;
