import "./style.css";

import displayAllTasks from "./modules/displayAllTasks.js";
import addTask from "./modules/addTask.js";
import options from "./modules/allOptions.js";
import render from "./modules/render";

document.addEventListener("keypress", addTask);
document.addEventListener("click", options);

render();
