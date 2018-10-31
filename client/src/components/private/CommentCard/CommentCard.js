import React from "react";
import Moment from "../../shared/Moment";
import "./CommentCard.css";

const CommentCard = props => (
  <div className="cCard">
    <h5>{props.author}</h5>
    <p>{props.text}</p>
    <p>
      <Moment time={props.createdAt} />
    </p>
  </div>
);

export default CommentCard;
