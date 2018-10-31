import React from "react";
import UsersSidebar from "../../../components/private/UsersSidebar";
import AddUser from "../../../components/private/AddUser";
import ViewUsers from "../../temp/EditUser/EditUser";

const Users = props => (
  <div>
    <UsersSidebar loadUserSubpage={props.loadUserSubpage} />
    {props.subpage === "view" ? (
     <ViewUsers />
    ) : props.subpage === "add" ? (
      <AddUser
        newFirstName={props.newFirstName}
        newLastName={props.newLastName}
        newEmail={props.newEmail}
        newUsername={props.newUsername}
        newPassword={props.newPassword}
        handleInputChange={props.handleInputChange}
        handleSignUp={props.handleSignUp}
      />
    ) : (
      "Edit User"
    )}
  </div>
);

export default Users;
