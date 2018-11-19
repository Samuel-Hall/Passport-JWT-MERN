import React, { Component } from "react";
import Row from "../../../components/shared/grid/Row";
import Col from "../../../components/shared/grid/Col";
import { Redirect, Link } from "react-router-dom";
import Nav from "../../../components/shared/Nav";
import UsersAPI from "../../../utils/usersAPI";
import "./login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      redirectTo: null
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {}

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleLogin(event) {
    event.preventDefault();
    console.log("User Input Data:");
    console.table({
      Username: this.state.username,
      Password: this.state.password
    });

    UsersAPI.loginUser({
      username: this.state.username,
      password: this.state.password
    })
      .then(response => {
        document.getElementById("loginForm").reset();
        if (response.status === 200) {
          console.log("response data table:");
          console.table(response);
          // If an error message is returned, display the error. Otherwise, continue with user info
          if (response.data.message) {
            alert(response.data.message);
          } else {
            // Udate App.js state
            this.props.updateUser({
              loggedIn: true,
              user: {
                id: response.data.userInfo._id,
                username: response.data.userInfo.username,
                firstName: response.data.userInfo.firstName,
                lastName: response.data.userInfo.lastName,
                email: response.data.userInfo.email
              }
            });
            // Save the JSON Web Token to local storage
            localStorage.setItem("token", response.data.token);
            // update the state to redirect to private view
            this.setState({
              redirectTo: "/dashboard"
            });
          }
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
    } else {
      return (
        <div className="Container">
          <Nav isPublic={true} />
          <Row>
            <Col size="4" />
            <Col size="4">
              <div className="signIn">
                <h4>Login</h4>
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
                <p>
                  Don't have an account?{" "}
                  <Link to="/signup">Click here to sign up.</Link>
                </p>
              </div>
            </Col>
          </Row>
        </div>
      );
    }
  }
}

export default Login;
