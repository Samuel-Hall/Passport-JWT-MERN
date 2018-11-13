import React from "react";
import Col from "../../../shared/grid/Col";
import "./accountInfoForm.css";

const AccountInfoForm = props => (
  <form>
    <label htmlFor="firstName">First Name:</label>
    <input
      type="text"
      id="firstName"
      name="firstName"
      placeholder={props.user.firstName}
      // value={props.newFirstName}
      // onChange={props.handleInputChange}
    />
    <label htmlFor="lastName">Last Name:</label>
    <input
      type="text"
      id="lastName"
      name="lastName"
      placeholder={props.user.lastName}
      // value={props.newLastNameame}
      // onChange={props.handleInputChange}
    />
    <label htmlFor="username">Username:</label>
    <input
      type="text"
      id="username"
      name="username"
      placeholder={props.user.username}
      // value={props.newUsername}
      // onChange={props.handleInputChange}
    />
    <label htmlFor="email">Email:</label>
    <input
      type="text"
      id="email"
      name="email"
      placeholder={props.user.email}
      // value={props.newEmail}
      // onChange={props.handleInputChange}
    />
    {/* <label htmlFor="password">Password:</label>
          <input
            placeholder="password"
            type="password"
            name="password"
            value={props.newPassword}
            onChange={props.handleInputChange}
          /> */}
    <button type="submit" onClick={props.toggleEditMode}>
      Cancel
    </button>
    <button>Save Changes</button>
  </form>
);

export default AccountInfoForm;
