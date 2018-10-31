import React from "react";
import Col from "../../../components/shared/grid/Col";
import "./CreateProjectForm.css";

const CreateProjectForm = props => (
  <div>
    <Col size="6" otherclasses="createProForm">
      <h4>Create Project</h4>
      <form>
        <div className="form-group">
          <input
            className="form-control"
            value={props.currentProject.title}
            onChange={props.handleInputChange}
            data-context="project"
            name="title"
            placeholder="Title (required)"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            value={props.currentProject.status}
            onChange={props.handleInputChange}
            data-context="project"
            name="status"
            placeholder="Status (required)"
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            value={props.currentProject.summary}
            onChange={props.handleInputChange}
            data-context="project"
            name="summary"
            placeholder="Summary (Optional)"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            value={props.currentProject.funds}
            onChange={props.handleInputChange}
            data-context="project"
            type="number"
            name="funds"
            placeholder="Funds (optional)"
          />
        </div>
        <button
          className="btn"
          data-context="project"
          data-isedit={true}
          onClick={props.callCloseCreateEdit}
        >
          Cancel
        </button>
        <button
          disabled={
            !(
              props.currentProject.title &&
              props.currentProject.status &&
              props.currentProject.summary
            )
          }
          onClick={
            props.editProject
              ? props.handleEditProjectFormSubmit
              : props.handleCreateProjectFormSubmit
          }
          style={{ float: "right", marginBottom: 10 }}
          className="btn btn-success"
        >
          Submit Project
        </button>
      </form>
    </Col>
  </div>
);

export default CreateProjectForm;
