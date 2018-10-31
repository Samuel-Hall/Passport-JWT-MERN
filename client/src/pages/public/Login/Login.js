import React, { Component } from "react";
import Row from "../../../components/shared/grid/Row";
import Col from "../../../components/shared/grid/Col";
import { Redirect } from "react-router-dom";
import Nav from "../../../components/shared/Nav";
import UsersAPI from "../../../utils/usersAPI";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      redirectTo: null,
      userExists: true
    };
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.checkForUsers = this.checkForUsers.bind(this);
  }

  componentWillMount() {
    this.checkForUsers();
  }

  checkForUsers() {
    UsersAPI.checkForUsers().then(response => {
      if (response.data.length === 0) {
        this.setState({ userExists: false });
      } else {
        this.setState({ userExists: true });
      }
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSignUp(event) {
    event.preventDefault();
    UsersAPI.signupUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    })
      .then(response => {
        if (!response.data.error) {
          alert(`Successful signup for new user: ${response.data.username}.`);
          this.setState({
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
            userExists: true
          });
        } else {
          alert(response.data.error);
          this.setState({
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: ""
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  handleLogin(event) {
    event.preventDefault();

    UsersAPI.loginUser({
      username: this.state.username,
      password: this.state.password
    })
      .then(response => {
        document.getElementById("loginForm").reset();
        if (response.status === 200) {
          console.log("response data", response.data);
          // Udate App.js state
          this.props.updateUser({
            loggedIn: true,
            user: {
              username: response.data.username,
              firstName: response.data.firstName,
              lastName: response.data.lastName
            }
          });
          // Setting session storage value to access on refresh
          sessionStorage.setItem("disco-panda", response.data.id);
          // update the state to redirect to private view
          this.setState({
            redirectTo: "/private"
          });
        }
      })
      .catch(error => {
        console.log(error);
        alert("Login failed");
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else if (this.state.userExists) {
      return (
        <div className="Container">
          <Nav isPublic={true} />
          <Row>
            <Col size="4" />
            <Col size="4">
              <div className="signIn">
                <h4>Administrator Login</h4>
                <form id="loginForm">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />

                  <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <button
                    className="btn"
                    id="btn1"
                    onClick={this.handleLogin}
                    type="submit"
                  >
                    Login
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      );
    } else {
      return (
        <div className="Container">
          <Nav isPublic={true} />
          <Row>
            <Col size="4" />
            <Col size="4">
              <div className="signIn">
                <h4>Administrator Sign Up</h4>
                <form id="loginForm">
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name (required)"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name (required)"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email (optional)"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username (required)"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="password">Password:</label>
                  <input
                    placeholder="Password (required)"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <button
                    id="btn2"
                    disabled={!(this.state.username && this.state.password)}
                    onClick={this.handleSignUp}
                    type="submit"
                  >
                    Sign up
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      );
    }
  }
}

export default Login;
