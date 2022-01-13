import "./style.css";

import displayAllTasks from "./modules/displayAllTasks.js";
import addTask from "./modules/addTask.js";
// import Tasks from "./modules/classTasks.js";

document.addEventListener("keypress", addTask);

window.onload = () => {
  displayAllTasks();
};
