import Tasks from "../modules/classTasks.js";

const editTask = (oldInput, newInput) => {
  // Edit Task
  Tasks.tasks.forEach((task) => {
    if (task.description === oldInput) {
      task.description = newInput;
    }
  });
  return Tasks.tasks;
};

export default editTask;
