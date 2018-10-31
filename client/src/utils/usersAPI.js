import axios from "axios";

export default {
  getAllUsers: function() {
    return axios.get("/api/users");
  },
  checkForUsers: function() {
    return axios.get("/api/users/check");
  },
  getCurrentUser: function() {
    return axios.get("/api/users/current");
  },
  signupUser: function(newUser) {
    return axios.post("/api/users/signup", newUser);
  },
  loginUser: function(userData) {
    return axios.post("/api/users/login", userData);
  },
  logoutUser: function(userData) {
    return axios.post("/api/users/logout", userData);
  },
  updateUser: function(id, userData) {
    return axios.put("/api/users/" + id, userData);
  }
};
