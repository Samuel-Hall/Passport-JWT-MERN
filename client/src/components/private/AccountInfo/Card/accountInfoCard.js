import React from "react";
import Col from "../../../shared/grid/Col";
import "./accountInfoCard.css";

const AccountInfoCard = props => (
  <Col size="4" className="center">
    <table className="accountInfoCard">
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
  </Col>
);

export default AccountInfoCard;
