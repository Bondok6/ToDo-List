import optionIconUrl from "../imgs/optionsIcon.svg";
import trashIcon from "../imgs/trashIcon.svg";
import Tasks from "./classTasks";
import getData from "./arrangeIndex";

const render = () => {
  getData();

  let htmlTask = "";
  Tasks.tasks.forEach((task) => {
    htmlTask += `
    <li class="${task.index}">
      <div class="task">
        <input type="checkbox" name="task" class="checkbox"><input type="text" class="task-desc" readonly value="${task.description}"/>
      </div>
      <div>
      <img src="${optionIconUrl}" alt="option-icon" class="option-icon">
      <img src="${trashIcon}" alt="option-icon" class="delete-icon">
      </div>
    </li>
    `;
  });
  const ul = document.getElementById("ul");
  ul.innerHTML = htmlTask;
};

export default render;
