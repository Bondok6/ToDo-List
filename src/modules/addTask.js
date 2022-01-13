import Tasks from './classTasks.js';
import checkDuplicate from './checkDup.js';
import optionIconUrl from '../imgs/optionsIcon.svg';
import trashIcon from '../imgs/trashIcon.svg';
import getData from './arrangeIndex.js';

const input = document.getElementById('task-input');

getData();

let id;

const addTask = (e) => {
  if (e.key === 'Enter') {
    // If empty value
    if (input.value === '') return;

    // Check duplication
    if (!checkDuplicate(input.value)) return;

    // If It's a new task
    id = Tasks.tasks.length + 1;
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

    const ul = document.getElementById('ul');
    ul.innerHTML += htmlTask;

    // Clear inputs
    input.value = '';
    input.focus();
  }
};

export default addTask;
