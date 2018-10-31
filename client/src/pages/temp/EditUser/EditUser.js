import React, { Component } from "react";
import Col from "../../../components/shared/grid/Col"
import UsersAPI from "../../../utils/usersAPI";
import UserList from "../../../components/EditUserList";

class ViewUsers extends Component {
  state = {
    users: [],
    user: {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: ""
    }
  };

  componentDidMount() {
    UsersAPI.getAllUsers()
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => console.log(err));
  }

  loadUsers() {
    UsersAPI.getAllUsers()
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => console.log(err));
  }

  updateUserInfo(id, data) {
    UsersAPI.updateUser(id, data).then(res => console.log(res.data));
  }

  handleOnDisable = event => {
    event.preventDefault();
  };

  handleOnChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      }
    });
  };

  handleOnClick = event => {
    console.log(event.target);
    event.preventDefault();
    const userID = event.target.value;
    console.log(userID);
    this.updateUserInfo(userID, this.state.user);
  };

    render(){
        return(
            <Col size="9">
            
                {this.state.users.map((user, index) => (
                    index === 0 ? null :
                <UserList key={this.state.user._id} user={user} onDisable={this.handleOnDisable} onChange={this.handleOnChange} onClick={this.handleOnClick}/>
                ))}

            </Col>
        )
    }
}

export default ViewUsers;
