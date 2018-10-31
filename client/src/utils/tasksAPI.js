import axios from "axios";

export default {
  // Gets all tasks
  getTasks: function() {
    return axios.get("/api/tasks");
  },
  // Gets the task with the given id
  getTask: function(id) {
    return axios.get("/api/tasks/" + id);
  },
  // Deletes the task with the given id
  deleteTask: function(id) {
    return axios.delete("/api/tasks/" + id);
  },
  // Saves a task to the database
  saveTask: function(taskData) {
    return axios.post("/api/tasks", taskData);
  },
  updateTask: function(id, taskUpdateData) {
    return axios.put("/api/tasks/" + id, taskUpdateData);
  }
};
