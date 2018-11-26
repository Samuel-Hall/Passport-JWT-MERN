import React from "react";
import Col from "../../../shared/grid/Col";
import "./accountInfoForm.css";

const AccountInfoForm = props => (
  <form>
    <label htmlFor="username">Username:</label>
    <input
      type="text"
      id="username"
      name="username"
      placeholder={props.user.username}
      value={props.modUser.username}
      onChange={props.handleInputChange}
    />
    <label htmlFor="firstName">First Name:</label>
    <input
      type="text"
      id="firstName"
      name="firstName"
      placeholder={props.user.firstName}
      value={props.modUser.firstName}
      onChange={props.handleInputChange}
    />
    <label htmlFor="lastName">Last Name:</label>
    <input
      type="text"
      id="lastName"
      name="lastName"
      placeholder={props.user.lastName}
      value={props.modUser.lastName}
      onChange={props.handleInputChange}
    />
    <label htmlFor="email">Email:</label>
    <input
      type="text"
      id="email"
      name="email"
      placeholder={props.user.email}
      value={props.modUser.email}
      onChange={props.handleInputChange}
    />
    <button type="submit" onClick={props.submitUpdate}>
      Save Changes
    </button>
    <button type="submit" onClick={props.toggleEditMode}>
      Cancel
    </button>
  </form>
);

export default AccountInfoForm;
