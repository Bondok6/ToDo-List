import Tasks from './classTasks.js';
import render from './render.js';

const deletTasks = () => {
  document.querySelectorAll('.finished').forEach((item) => {
    item.parentNode.parentNode.remove();
  });

  Tasks.tasks = Tasks.tasks.filter((task) => !task.completed);
  Tasks.arrange();
  Tasks.storage(Tasks.tasks);
  render();
  window.location.reload();
};

export default deletTasks;
