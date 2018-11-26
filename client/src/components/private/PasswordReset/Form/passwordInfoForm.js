import React from "react";
import "./passwordInfoForm.css";

const PasswordInfoForm = props => (
  <form>
    <label htmlFor="current">Current Password:</label>
    <input
      type="password"
      id="currentPassword"
      name="current"
      placeholder="Password"
      value={props.password.current}
      onChange={props.handleInputChange}
    />
    <label htmlFor="new">New Password:</label>
    <input
      type="password"
      id="newPassword"
      name="new"
      placeholder="New Password"
      value={props.password.new}
      onChange={props.handleInputChange}
    />
    <label htmlFor="confirm">Confirm New Password:</label>
    <input
      type="password"
      id="confirmPassword"
      name="confirm"
      placeholder="New Password"
      value={props.password.confirm}
      onChange={props.handleInputChange}
    />
    <button type="submit" onClick={props.updatePassword}>
      Save Changes
    </button>
    {/*  TODO: make this button simply clear the form and redirect to dashboard   
    <button type="submit" onClick={props.toggleEditMode}>
      Cancel
    </button> */}
  </form>
);

export default PasswordInfoForm;
