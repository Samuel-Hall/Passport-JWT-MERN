import React from "react";
import "./passwordInfoCard.css";
import PasswordInfoForm from "../Form";

const PasswordInfoCard = props => (
  <div className="col m4 offset-m4">
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">Password Information</span>
        <PasswordInfoForm
          user={props.user}
          password={props.password}
          updatePassword={props.updatePassword}
          handleInputChange={props.handleInputChange}
          toggleEditMode={props.toggleEditMode}
        />
      </div>
    </div>
  </div>
);

export default PasswordInfoCard;
