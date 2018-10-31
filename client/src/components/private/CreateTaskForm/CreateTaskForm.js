import React from "react";
import Col from "../../shared/grid/Col";
import "./CreateTaskForm.css";

const CreateTaskForm = props => (
  <Col size="12">
    <form className="ctCard">
      <div className="form-group">
        <input
          className="form-control"
          value={props.newTask.title}
          onChange={props.handleInputChange}
          data-context="createTask"
          name="title"
          placeholder="Title"
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          value={props.newTask.description}
          onChange={props.handleInputChange}
          data-context="createTask"
          name="description"
          placeholder="Description"
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          value={props.newTask.funds}
          onChange={props.handleInputChange}
          data-context="createTask"
          type="number"
          name="funds"
          placeholder="Funds"
        />
      </div>
      <button
        className="btn"
        data-context="task"
        data-isedit={false}
        onClick={props.callCloseCreateEdit}
      >
        Cancel
      </button>
      <button
        disabled={
          !(
            props.newTask.title &&
            props.newTask.description &&
            props.newTask.funds
          )
        }
        onClick={props.handleCreateTaskFormSubmit}
        style={{ float: "right", marginBottom: 10 }}
        className="btn btn-success"
      >
        Submit Task
      </button>
    </form>
  </Col>
);

export default CreateTaskForm;
