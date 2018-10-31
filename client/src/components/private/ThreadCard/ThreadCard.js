import React from "react";
import Row from "../../shared/grid/Row";
import Col from "../../shared/grid/Col";
import Moment from "../../shared/Moment";
import "./ThreadCard.css";

const ThreadCard = props => (
  <div className="tCard">
    <Row>
      <Col size="6">
        <h5 onClick={() => props.loadProjectSubpage("comments", props.index)}>
          <span className="titleClick">{props.title}</span>
        </h5>
        <p>Created by: {props.author}</p>
      </Col>
      <Col size="2">
        <h5>Replies</h5>
        <p>{props.replies}</p>
      </Col>
      <Col size="4">
        <h5>Last Message</h5>
        <p>{props.updatedBy}</p>
        <p>
          <Moment time={props.updatedAt} />
        </p>
      </Col>
    </Row>
  </div>
);

export default ThreadCard;
