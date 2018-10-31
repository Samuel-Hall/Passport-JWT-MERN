import React from "react";
import Row from "../../../components/shared/grid/Row";
import Col from "../../../components/shared/grid/Col";
import Task from "../../../components/private/Task";
import CreateTaskForm from "../../../components/private/CreateTaskForm";
import "./Tasks.css";

const Tasks = props => (
  <div>
    <Row>
      <Col size="4">
        <a
          className="btn"
          data-command="create"
          data-context="task"
          onClick={props.handleCreateEditBtn}
        >
          Create Task
        </a>
      </Col>
    </Row>
    {props.createTask ? (
      <CreateTaskForm
        newTask={props.newTask} //object
        //Functions
        callCloseCreateEdit={props.callCloseCreateEdit}
        handleInputChange={props.handleInputChange}
        handleCreateTaskFormSubmit={props.handleCreateTaskFormSubmit}
      />
    ) : (
      <div>
        {props.tasks
          .slice(0)
          .reverse() // display new tasks at top
          .map((task, index) => (
            <Task
              // task data
              index={index}
              id={task._id}
              key={task._id}
              title={task.title}
              description={task.description}
              status={task.isComplete ? "Complete" : "Incomplete"}
              funds={task.funds}
              // props
              editTask={props.editTask} //bool
              targetTask={props.targetTask} //id string
              // functions
              handleCreateEditBtn={props.handleCreateEditBtn}
              callCloseCreateEdit={props.callCloseCreateEdit}
              handleInputChange={props.handleInputChange} //form
              handleEditTaskFormSubmit={props.handleEditTaskFormSubmit} //form
            />
          ))}
      </div>
    )}
  </div>
);

export default Tasks;
