import Tasks from "./classTasks.js";
import checkDuplicate from "./checkDup.js";
import optionIconUrl from "../imgs/optionsIcon.svg";

const input = document.getElementById("task-input");
const inputItem = document.getElementById("input-item");

const addTask = (e) => {
  if (e.key === "Enter") {
    // If empty value
    console.log(input.value);
    if (input.value === "") return;

    // Check duplication
    if (!checkDuplicate(input.value)) return;

    // If It's a new task
    const newTask = new Tasks(input.value, Tasks.tasks.length);
    console.log(newTask);
    Tasks.tasks.push(newTask);
    Tasks.storage(Tasks.tasks);

    let htmlTask = `
    <li class="task-${newTask.id}">
      <div class="task">
        <input type="checkbox" name="task"> ${newTask.description}
      </div>
      <img src="${optionIconUrl}" alt="option-icon" class="option-icon">
    </li>
    `;

    inputItem.insertAdjacentHTML("afterend", htmlTask);

    // Clear inputs
    input.value = "";
    input.focus();
  }
};

export default addTask;
