import React from "react";
import PostCard from "../../../components/private/PostCard";
import PostForm from "../../../components/PostForm";
import Row from "../../../components/shared/grid/Row";
import Col from "../../../components/shared/grid/Col";

const Posts = props => (
  <div>
    <Row>
      <Col size="4">
        <a
          className="btn"
          data-command="create"
          data-context="post"
          onClick={props.handleCreateEditBtn}
        >
          Create Post
        </a>
      </Col>
    </Row>
    <Row>
      {props.createPost ? (
        <PostForm
          projectID={props.projectID}
          userFirstName={props.userFirstName}
          userLastName={props.userLastName}
          loadCurrentProject={props.loadCurrentProject}
          closeCreateEdit={props.closeCreateEdit}
        />
      ) : (
        <div>
          {props.posts.map(post => (
            <PostCard
              {...post}
              key={props._id}
              projectID={props.projectID}
              loadCurrentProject={props.loadCurrentProject}
            />
          ))}
        </div>
      )}
    </Row>
  </div>
);

export default Posts;
