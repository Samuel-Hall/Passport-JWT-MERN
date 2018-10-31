import axios from "axios";

export default {
  // Gets all threads
  getComments: function() {
    return axios.get("/api/comments");
  },
  // Gets the thread with the given id
  getComment: function(id) {
    return axios.get("/api/comments/" + id);
  },
  // Deletes the thread with the given id
  deleteComment: function(id) {
    return axios.delete("/api/comments/" + id);
  },
  // Saves a thread to the database
  saveComment: function(forumData) {
    return axios.post("/api/comments", forumData);
  }
};
