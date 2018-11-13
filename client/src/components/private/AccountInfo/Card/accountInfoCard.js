import React from "react";
// import Col from "../../../shared/grid/Col";
import "./accountInfoCard.css";
import AccountInfoTable from "../Table";
import AccountInfoForm from "../Form";

const AccountInfoCard = props => (
  <div className="col m4 offset-m4">
    <div className="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">Account Information</span>
        {!props.editMode ? (
          <AccountInfoTable user={props.user} />
        ) : (
          <AccountInfoForm
            user={props.user}
            toggleEditMode={props.toggleEditMode}
          />
        )}
      </div>
    </div>
  </div>
);

export default AccountInfoCard;
