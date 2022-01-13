import optionIconUrl from "../imgs/optionsIcon.svg";
import Tasks from "./classTasks";

const displayAllTasks = () => {
  if (JSON.parse(localStorage.getItem("tasks"))) {
    Tasks.tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  let htmlTask = "";
  Tasks.tasks.forEach((task) => {
    htmlTask = `
    <li class="task-${task.id}">
      <div class="task">
        <input type="checkbox" name="task"> ${task.description}
      </div>
      <img src="${optionIconUrl}" alt="option-icon" class="option-icon">
    </li>
    `;
    const inputItem = document.getElementById("input-item");
    inputItem.insertAdjacentHTML("afterend", htmlTask);
  });
};

export default displayAllTasks;
