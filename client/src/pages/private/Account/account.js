// React Imports
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// Grid Imports
import Row from "../../../components/shared/grid/Row";
// Component Imports
import Nav from "../../../components/shared/Nav";
import Users from "../Users";
import AccountInfoCard from "../../../components/private/AccountInfo/Card";
import AccountInfoForm from "../../../components/private/AccountInfo/Form";
//API Imports
import UsersAPI from "../../../utils/usersAPI";
// CSS Imports
import "./account.css";

class Account extends Component {
  constructor() {
    super();
    this.state = {
      editMode: false
    };
  }

  toggleEditMode = event => {
    event.preventDefault();
    if (!this.state.editMode) {
      this.setState({ editMode: true });
    } else {
      this.setState({ editMode: false });
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    const context = event.target.getAttribute("data-context");
    switch (context) {
      case "project":
        this.setState({
          currentProject: {
            ...this.state.currentProject,
            [name]: value
          }
        });
        break;
      case "newUser":
        this.setState({
          newData: {
            ...this.state.newData,
            newUser: {
              ...this.state.newData.newUser,
              [name]: value
            }
          }
        });
        break;
      case "createTask":
        this.setState({
          newData: {
            ...this.state.newData,
            newTask: {
              ...this.state.newData.newTask,
              [name]: value
            }
          }
        });
        break;
      case "editTask":
        const index = event.target.getAttribute("data-index");
        const tasks = this.state.currentProject.tasks.slice();
        tasks[tasks.length - 1 - parseInt(index, 10)] = {
          ...tasks[tasks.length - 1 - parseInt(index, 10)],
          [name]: value
        };
        this.setState({
          currentProject: {
            ...this.state.currentProject,
            tasks: tasks
          }
        });
        break;
      case "createThread":
        this.setState({
          newData: {
            ...this.state.newData,
            newThread: {
              ...this.state.newData.newThread,
              [name]: value
            }
          }
        });
        break;
      case "createComment":
        this.setState({
          newData: {
            ...this.state.newData,
            newComment: {
              ...this.state.newData.newComment,
              [name]: value
            }
          }
        });
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <Nav
          isPublic={false}
          loadPage={this.loadPage}
          handleLogout={this.props.handleLogout}
          loggedIn={this.props.loggedIn}
          user={this.props.user}
        />
        <Row>
          <button className="right" onClick={this.toggleEditMode}>
            Make Changes <i className="material-icons">edit</i>
          </button>
          <AccountInfoCard
            editMode={this.state.editMode}
            toggleEditMode={this.toggleEditMode}
            user={this.props.user}
          />
        </Row>
      </div>
    );
  }
}

export default withRouter(Account);
