import "./style.css";
import optionIconUrl from "./imgs/optionsIcon.svg";
import tasks from "./modules/tasksList.js";

const inputItem = document.getElementById("input-item");

const tasksDisplay = () => {
  tasks.reverse().forEach((task) => {
    const html = `
    <li class="task-${task.index}">
      <div class="task">
        <input type="checkbox" name="task"> ${task.description}
      </div>
      <img src="${optionIconUrl}" alt="option-icon" class="option-icon">
    </li>
    `;
    inputItem.insertAdjacentHTML("afterend", html);
  });
};

tasksDisplay();
