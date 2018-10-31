import React from "react";
import Row from "../../shared/grid/Row";
import Col from "../../shared/grid/Col";
import "./Task.css";

const Task = props => (
  <div className="taskCard">
    {props.editTask && props.id === props.targetTask ? (
      <form>
        <div className="form-group">
          <input
            className="form-control"
            value={props.title}
            onChange={props.handleInputChange}
            data-context="editTask"
            name="title"
            data-index={props.index}
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            value={props.description}
            onChange={props.handleInputChange}
            data-context="editTask"
            name="description"
            data-index={props.index}
            placeholder="Description"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            value={props.funds}
            onChange={props.handleInputChange}
            data-context="editTask"
            type="number"
            name="funds"
            data-index={props.index}
            placeholder="Funds"
          />
        </div>
        <button
          data-context="task"
          data-isedit={true}
          onClick={props.callCloseCreateEdit}
        >
          Cancel
        </button>
        <button
          disabled={!(props.title && props.description && props.funds)}
          onClick={props.handleEditTaskFormSubmit}
          data-index={props.index}
          data-id={props.id}
          style={{ float: "right", marginBottom: 10 }}
          className="btn btn-success"
        >
          Update Task
        </button>
      </form>
    ) : (
      <div>
        <h5>{props.title}</h5>
        <Row>
          <Col size="8">
            <p>{props.description}</p>
          </Col>
          <Col size="4">
            <p>Funds: ${props.funds}</p>
            <button
              data-id={props.id}
              data-command="edit"
              data-context="task"
              className="btn"
              onClick={props.handleCreateEditBtn}
            >
              Edit task
            </button>
          </Col>
        </Row>
      </div>
    )}
  </div>
);

export default Task;
