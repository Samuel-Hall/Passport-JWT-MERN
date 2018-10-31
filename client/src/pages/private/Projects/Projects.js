import React from "react";
import Col from "../../../components/shared/grid/Col";
import ProjectsSidebar from "../../../components/private/ProjectsSidebar";
import CreateProjectForm from "../CreateProjectForm";
import ProjectViewer from "../ProjectViewer";

const Projects = props => (
  <div>
    <ProjectsSidebar
      projects={props.projects} //array
      // Functions
      loadCurrentProject={props.loadCurrentProject}
      unloadCurrentProject={props.unloadCurrentProject}
    />
    <Col size="1" />
    {props.metadata.projectIsLoaded ? (
      <ProjectViewer
        currentProject={props.currentProject} //object
        // Unpacked metadata
        userFirstName={props.userFirstName}
        userLastName={props.userLastName}
        subpage={props.metadata.projectSubpage} //string
        currentThreadIndex={props.metadata.currentThreadIndex} //number
        editProject={props.metadata.editProject} //bool
        createTask={props.metadata.createTask} //bool
        editTask={props.metadata.editTask} //bool
        createThread={props.metadata.createThread} //bool
        editThread={props.metadata.editThread} //bool
        createComment={props.metadata.createComment} //bool
        editComment={props.metadata.editComment} //bool
        createPost={props.metadata.createPost} //bool
        editPost={props.metadata.editPost}
        // Unpacked newData
        newTask={props.newData.newTask} //object
        newThread={props.newData.newThread} //object
        newComment={props.newData.newComment} //object
        // Unpacked targetEdits
        targetTask={props.targetEdits.task} //id string
        // Functions
        closeCreateEdit={props.closeCreateEdit}
        loadCurrentProject={props.loadCurrentProject}
        loadProjectSubpage={props.loadProjectSubpage}
        handleCreateEditBtn={props.handleCreateEditBtn}
        callCloseCreateEdit={props.callCloseCreateEdit}
        handleInputChange={props.handleInputChange} //form
        handleEditProjectFormSubmit={props.handleEditProjectFormSubmit} //form
        handleCreateTaskFormSubmit={props.handleCreateTaskFormSubmit} //form
        handleEditTaskFormSubmit={props.handleEditTaskFormSubmit} //form
        handleCreateThreadFormSubmit={props.handleCreateThreadFormSubmit} //form
        handleCreateCommentFormSubmit={props.handleCreateCommentFormSubmit} //form
      />
    ) : (
      <CreateProjectForm
        currentProject={props.currentProject} //object
        editProject={props.metadata.editProject} //bool
        // Functions
        handleInputChange={props.handleInputChange} //form
        handleCreateProjectFormSubmit={props.handleCreateProjectFormSubmit} //form
      />
    )}
    <Col size="1" />
  </div>
);

export default Projects;
