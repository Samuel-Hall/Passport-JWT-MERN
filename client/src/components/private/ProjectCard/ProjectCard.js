import React from "react";
import "./ProjectCard.css";

const ProjectCard = props => (
  <div className="card" onClick={() => props.loadCurrentProject(props.id)}>
    <div className="card-content projectCard ">
      <span className="card-title">
        <strong>{props.name}</strong>
      </span>
      <p>
        Status: <strong>{props.status}</strong>
      </p>
    </div>
  </div>
);

export default ProjectCard;
