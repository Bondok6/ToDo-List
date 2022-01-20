import Tasks from "./classTasks.js";

const statusTask = () => {
  const checkboxes = document.querySelectorAll(".checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      const { target } = e;
      const targetId = +target.parentNode.parentNode.className - 1;
      target.nextSibling.classList.toggle("finished");
      Tasks.tasks[targetId].completed = !Tasks.tasks[targetId].completed;
      Tasks.storage(Tasks.tasks);
    });
  });

  // prettier-ignore
  Tasks.tasks.forEach((task) => {
    if (task.completed) {
      document.querySelectorAll('.task-desc')[task.index - 1].classList.add('finished');
      document.querySelectorAll('.checkbox')[task.index - 1].checked = true;
    }
  });
};

export default statusTask;
