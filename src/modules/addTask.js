import Tasks from "./classTasks.js";
import checkDuplicate from "./helper/checkDup.js";
import optionIconUrl from "../images/optionsIcon.svg";
import trashIcon from "../images/trashIcon.svg";
import statusTask from "./statusTask.js";

const addTask = (e) => {
  const input = document.getElementById("task-input");

  // When the user click on enter
  if (e.key === "Enter") {
    // check If the value not empty
    if (input.value === "") return;

    // check if there is no repetition
    if (!checkDuplicate(input.value)) return;

    // If It's a new task
    let id = Tasks.tasks.length + 1;
    const newTask = new Tasks(input.value, id);
    Tasks.tasks.push(newTask);
    Tasks.storage(Tasks.tasks);

    const htmlTask = `
    <li class="${newTask.index}">
      <div class="task">
        <input type="checkbox" name="task" class="checkbox"><input type="text" readonly class="task-desc" value="${newTask.description}"/>
      </div>
      <div>
      <img src="${optionIconUrl}" alt="option-icon" class="option-icon">
      <img src="${trashIcon}" alt="option-icon" class="delete-icon">
      </div>
    </li>
    `;

    const ul = document.getElementById("ul");
    ul.innerHTML += htmlTask;
    statusTask();

    // Clear inputs
    input.value = "";
    input.focus();
  }
  throw new Error("Wrong input");
};

export default addTask;
