import React from "react";
import CommentCard from "../../../components/private/CommentCard";
import "./Comments.css";
const Comments = props => (
  <div>
    <h4>{props.thread.title}</h4>
    <form className="privateComments">
      <div className="form-group">
        <textarea
          className="form-control"
          value={props.newComment.comment}
          onChange={props.handleInputChange}
          data-context="createComment"
          name="comment"
          placeholder="Comment"
        />
      </div>
      <button
        disabled={!props.newComment.comment}
        onClick={props.handleCreateCommentFormSubmit}
        data-parentid={props.thread._id}
        style={{ float: "right", marginBottom: 10 }}
        className="btn btn-success"
      >
        Submit Comment
      </button>
    </form>
    {props.thread.comments.map(comment => (
      <CommentCard
        key={comment._id}
        id={comment._id}
        author={comment.author}
        text={comment.text}
        createdAt={comment.createdAt}
      />
    ))}
  </div>
);

export default Comments;
