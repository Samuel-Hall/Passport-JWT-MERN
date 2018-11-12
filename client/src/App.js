// Import React
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
// Import Pages
import Login from "./pages/public/Login";
import SignUp from "./pages/public/SignUp";
import PrivateMaster from "./pages/private/PrivateMaster";
import Account from "./pages/private/Account";
import NoMatch from "./pages/public/NoMatch";
// Import Private Route
import PrivateRoute from "./components/private/PrivateRoute";
// Import API
import UsersAPI from "./utils/usersAPI";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: {
        username: "",
        firstName: "",
        lastName: "",
        email: ""
      }
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    // Get JWT from local storage.
    const token = localStorage.getItem("token");
    console.log("getUser, token:", token);
    // Pass token to secured route
    UsersAPI.getCurrentUser(token).then(response => {
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          user: {
            username: response.data.user.username,
            firstName: response.data.user.firstName,
            lastName: response.data.user.lastName,
            email: response.data.user.email
          }
        });
        console.log("email", response.data.user.email);
      } else {
        console.log("There is no user: ", response.data);
        this.handleLogout();
        this.setState({
          user: null
        });
      }
    });
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  handleLogout(event) {
    // event.preventDefault();
    // Remove JWTs from local storage.
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    UsersAPI.logoutUser({ user: this.state.username })
      .then(response => {
        if (response.status === 200) {
          this.updateUser({
            loggedIn: false,
            username: null
          });
        }
      })
      .catch(error => {
        console.log("Logout error", error);
      });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Login updateUser={this.updateUser} {...props} />
              )}
            />
            <Route
              exact
              path="/signup"
              render={props => (
                <SignUp updateUser={this.updateUser} {...props} />
              )}
            />
            <PrivateRoute
              path="/dashboard"
              component={PrivateMaster}
              loggedIn={this.state.loggedIn}
              handleLogout={this.handleLogout}
              getUser={this.getUser}
              user={this.state.user}
            />
            <PrivateRoute
              path="/account"
              component={Account}
              loggedIn={this.state.loggedIn}
              handleLogout={this.handleLogout}
              getUser={this.getUser}
              user={this.state.user}
            />
            <Route render={() => <Redirect to="/dashboard" />} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
