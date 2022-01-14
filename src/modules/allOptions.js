import Tasks from './classTasks.js';
import render from './render.js';

const options = (e) => {
  // Delete Task
  const target = e.target.parentNode.parentNode;
  const targetId = +target.className;
  if (e.target.classList.contains('delete-icon')) {
    Tasks.tasks = Tasks.tasks.filter((task) => task.index !== targetId);
    Tasks.arrange();
    Tasks.storage(Tasks.tasks);
    render();
    target.remove();
  }

  // Edit Task
  if (e.target.classList.contains('option-icon')) {
    const optionIcon = e.target;
    const targetInput = e.target.parentNode.parentNode.firstChild.nextSibling.childNodes[2];

    targetInput.removeAttribute('readonly');
    targetInput.focus();
    const span = document.createElement('span');
    span.textContent = 'Save';
    optionIcon.parentNode.insertAdjacentElement('afterbegin', span);
    optionIcon.classList.add('hidden');

    span.addEventListener('click', () => {
      Tasks.tasks.forEach((task) => {
        if (task.index === targetId) {
          task.description = targetInput.value;
        }
      });
      Tasks.storage(Tasks.tasks);
      targetInput.setAttribute('readonly', 'readonly');
      optionIcon.classList.remove('hidden');
      span.classList.add('hidden');
    });
  }
};

export default options;
