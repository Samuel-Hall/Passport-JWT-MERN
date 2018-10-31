import React from "react";
import { Link } from "react-router-dom";
import Row from "../../shared/grid/Row";
import Col from "../../shared/grid/Col";
import Moment from "../../shared/Moment";
import "./PostCard.css";

const PostCard = props => (
  <div className="postcard">
    <h4>{props.title}</h4>
    <p>
      <Moment time={props.updatedAt} />
    </p>
    <Row>
      <Col size="12">Tags: {props.tags.join(", ")}</Col>
    </Row>
    <Row>
      <Col size="8" otherclasses="postcardLeft">
        <p>{props.summary}</p>
      </Col>
      <Col size="4" otherclasses="postcardRight">
        <Link to={"/posts/" + props._id}>
          <button className="btn">View Post</button>
        </Link>
      </Col>
    </Row>
  </div>
);

export default PostCard;
