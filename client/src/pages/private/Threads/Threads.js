import React from "react";
import Row from "../../../components/shared/grid/Row";
import Col from "../../../components/shared/grid/Col";
import ThreadCard from "../../../components/private/ThreadCard";
import CreateThreadForm from "../../../components/private/CreateThreadForm";

const Threads = props => (
  <div>
    <Row>
      <Col size="4">
        <a
          className="btn"
          name="task"
          data-command="create"
          data-context="thread"
          onClick={props.handleCreateEditBtn}
        >
          Start New Thread
        </a>
      </Col>
    </Row>
    {props.createThread ? (
      <CreateThreadForm
        newThread={props.newThread}
        //Functions
        callCloseCreateEdit={props.callCloseCreateEdit}
        handleInputChange={props.handleInputChange}
        handleCreateThreadFormSubmit={props.handleCreateThreadFormSubmit}
      />
    ) : (
      <div>
        {props.threads.map((thread, index) => (
          <ThreadCard
            index={index}
            key={thread._id}
            id={thread._id}
            title={thread.title}
            author={thread.author}
            replies={thread.comments.length}
            updatedBy={thread.comments[0].author}
            updatedAt={thread.comments[0].createdAt}
            loadProjectSubpage={props.loadProjectSubpage}
          />
        ))}
      </div>
    )}
  </div>
);

export default Threads;
