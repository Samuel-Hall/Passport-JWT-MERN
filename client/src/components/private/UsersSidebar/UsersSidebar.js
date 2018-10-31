import React from "react";
import Col from "../../../components/shared/grid/Col";
import "./UsersSidebar.css";

const UsersSidebar = props => (
  <Col size="2">
    <div>
      <button
        className="btn btnUser1"
        onClick={() => props.loadUserSubpage("view")}
      >
        View users
      </button>
    </div>
    <div>
      <button
        className="btn btnUser2"
        onClick={() => props.loadUserSubpage("add")}
      >
        Add user
      </button>
    </div>
  </Col>
);

export default UsersSidebar;
