import React from "react";
import Col from "../../../shared/grid/Col";
import "./accountInfoTable.css";

const AccountInfoTable = props => (
  <table className="accountInfoTable">
    <tbody>
      <tr>
        <td>First Name:</td>
        <td>{props.user.firstName}</td>
      </tr>
      <tr>
        <td>Last Name:</td>
        <td>{props.user.lastName}</td>
      </tr>
      <tr>
        <td>Username:</td>
        <td>{props.user.username}</td>
      </tr>
      <tr>
        <td>Email:</td>
        <td>{props.user.email}</td>
      </tr>
    </tbody>
  </table>
);

export default AccountInfoTable;
