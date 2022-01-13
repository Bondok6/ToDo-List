import './style.css';

import addTask from './modules/addTask.js';
import options from './modules/allOptions.js';
import render from './modules/render.js';

document.addEventListener('keypress', addTask);
document.addEventListener('click', options);

render();
