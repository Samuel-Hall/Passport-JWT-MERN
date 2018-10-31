import React, { Component } from "react";

const UserList = props => {
  console.log(props.users);

  return (
    <tr>
      <td>{props.users.username}</td>
      <td>{props.users.password}</td>
      <td>{props.users.firstname}</td>
      <td>{props.users.lastname}</td>
      <td>{props.users.email}</td>
      <td>
        <button>Make Changes</button>
      </td>
    </tr>
  );
};

export default UserList;
