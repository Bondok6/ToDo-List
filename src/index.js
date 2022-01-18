import './style.css';

import addTask from './modules/addTask.js';
import options from './modules/allOptions.js';
import render from './modules/render.js';
import statusTask from './modules/statusTask.js';
import deleteTasks from './modules/deleteTasks.js';

render();
statusTask();

document.addEventListener('keypress', addTask);
document.addEventListener('click', options);
document.querySelector('#clear-btn').addEventListener('click', deleteTasks);
