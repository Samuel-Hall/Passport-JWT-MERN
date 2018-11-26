import axios from "axios";

export default {
  getAllUsers: function() {
    return axios.get("/api/users");
  },
  checkForUsers: function() {
    return axios.get("/api/users/check");
  },
  // Secured API route, requests current user data.
  getCurrentUser: function(token) {
    console.log("getCurrentUser, token:", token);
    return axios.get("/api/users/current", {
      headers: { Authorization: `Bearer ${token}` }
    });
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
  updateUser: function(id, token, userData) {
    return axios.put("/api/users/" + id, userData, {
      headers: { Authorization: `Bearer ${token}` }
    });
  },
  updatePassword: function(id, token, passData) {
    return axios.put("/api/users/password/" + id, passData, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
};
