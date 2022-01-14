import Tasks from "./classTasks";
import render from "./render";

const deletTasks = () => {
  document.querySelectorAll(".finished").forEach((item) => {
    item.parentNode.parentNode.remove();
  });

  Tasks.tasks = Tasks.tasks.filter((task) => !task.completed);
  Tasks.arrange();
  Tasks.storage(Tasks.tasks);
  render();
  location.reload();
};

export default deletTasks;
