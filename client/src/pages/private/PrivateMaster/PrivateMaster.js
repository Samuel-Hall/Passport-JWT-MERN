// React Imports
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// Grid Imports
import Row from "../../../components/shared/grid/Row";
// Component Imports
import Nav from "../../../components/shared/Nav";
import Users from "../Users";
//API Imports
import UsersAPI from "../../../utils/usersAPI";
// CSS Imports
import "./PrivateMaster.css";

class PrivateMaster extends Component {
  constructor() {
    super();
    this.state = {
      metadata: {
        currentPage: "projects",
        projectIsLoaded: false,
        projectSubpage: "tasks",
        userSubpage: "view",
        currentThreadIndex: 0,
        editProject: false,
        createTask: false,
        editTask: false,
        createThread: false,
        editThread: false,
        createComment: false,
        editComment: false,
        createPost: false,
        editPost: false
      },
      user: {
        username: null
      },
      projects: [],
      currentProject: {
        title: "",
        status: "",
        summary: "",
        funds: ""
      },
      newData: {
        newUser: {
          username: "",
          password: "",
          firstName: "",
          lastName: "",
          email: ""
        },
        newTask: {
          title: "",
          description: "",
          funds: ""
        },
        newThread: {
          title: "",
          comment: ""
        },
        newComment: {
          comment: ""
        }
      },
      targetEdits: {
        task: ""
      }
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentDidMount() {
    this.setUser(this.props.user);
  }

  setUser = username => {
    this.setState({
      user: {
        ...this.state.user,
        username: username
      }
    });
  };

  loadUserSubpage = page => {
    if (page === "view") {
      this.setState({
        metadata: {
          ...this.state.metadata,
          userSubpage: "view"
        }
      });
    } else if (page === "add") {
      this.setState({
        metadata: {
          ...this.state.metadata,
          userSubpage: "add"
        }
      });
    } else if (page === "edit-user") {
      this.setState({
        metadata: {
          ...this.state.metadata,
          projectSubpage: "edit-user"
        }
      });
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

  handleSignUp(event) {
    event.preventDefault();
    UsersAPI.signupUser({
      firstName: this.state.newData.newUser.firstName,
      lastName: this.state.newData.newUser.lastName,
      email: this.state.newData.newUser.email,
      username: this.state.newData.newUser.username,
      password: this.state.newData.newUser.password
    })
      .then(response => {
        if (!response.data.error) {
          console.log("successful signup");
          alert(`Successful signup for new user: ${response.data.username}.`);
          this.setState({
            newData: {
              newUser: {
                firstName: "",
                lastName: "",
                email: "",
                username: "",
                password: ""
              }
            }
          });
        } else {
          alert(response.data.error);
          this.setState({
            newData: {
              newUser: {
                firstName: "",
                lastName: "",
                email: "",
                username: "",
                password: ""
              }
            }
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

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
          {this.state.metadata.currentPage === "users" ? (
            <Users
              // State props
              subpage={this.state.metadata.userSubpage}
              newUsername={this.state.newData.newUser.username}
              newPassword={this.state.newData.newUser.password}
              newFirstName={this.state.newData.newUser.firstName}
              newLastName={this.state.newData.newUser.lastName}
              newEmail={this.state.newData.newUser.email}
              // Functions
              loadUserSubpage={this.loadUserSubpage}
              handleInputChange={this.handleInputChange}
              handleSignUp={this.handleSignUp}
            />
          ) : (
            "stuff"
          )}
        </Row>
      </div>
    );
  }
}

export default withRouter(PrivateMaster);
