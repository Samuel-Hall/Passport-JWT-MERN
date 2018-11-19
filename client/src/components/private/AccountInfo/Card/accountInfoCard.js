import React from "react";
// import Col from "../../../shared/grid/Col";
import "./accountInfoCard.css";
import AccountInfoDisplay from "../Display";
import AccountInfoForm from "../Form";

const AccountInfoCard = props => (
  <div className="col m4 offset-m4">
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">Account Information</span>
        {!props.editMode ? (
          <AccountInfoDisplay user={props.user} />
        ) : (
          <AccountInfoForm
            user={props.user}
            modUser={props.modUser}
            submitUpdate={props.submitUpdate}
            handleInputChange={props.handleInputChange}
            toggleEditMode={props.toggleEditMode}
          />
        )}
      </div>
    </div>
  </div>
);

export default AccountInfoCard;
