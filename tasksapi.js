axios.defaults.baseURL = "http://localhost:3000";

function getTasks(cb) {
  axios.get("/tasks").then((r) => cb(r.data));
}

function getTask(cb, taskId) {
  axios.get(`/tasks/${taskId}`).then((r) => cb(r.data));
}

function createTask(title, project, date, cb) {
  const newTask = {
    title: title,
    project: project,
    dueTo: date,
  };
  axios.post(`/tasks`, newTask).then((r) => cb(r.data));
}

function deleteTask(taskId, cb) {
  axios.delete(`/tasks/${taskId}`).then((r) => cb(r.data));
}
