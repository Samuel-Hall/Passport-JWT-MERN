import axios from "axios";

export default {
  // Gets all threads
  getThreads: function() {
    return axios.get("/api/threads");
  },
  // Gets the thread with the given id
  getThread: function(id) {
    return axios.get("/api/threads/" + id);
  },
  // Deletes the thread with the given id
  deleteThread: function(id) {
    return axios.delete("/api/threads/" + id);
  },
  // Saves a thread to the database
  saveThread: function(threadData) {
    return axios.post("/api/threads", threadData);
  },
  updateThread: function(id, threadData) {
    return axios.put("/api/threads/" + id, threadData);
  }
};
