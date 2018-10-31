import React from "react";
import "./CreateProject.css";

const CreateProject = props => (
  <div className="card" onClick={() => props.unloadCurrentProject()}>
    <div id="createProjectBtn" className="card-content projectCard ">
      <span className="card-title">
        <strong>Create Project</strong>
      </span>
    </div>
  </div>
);

export default CreateProject;
