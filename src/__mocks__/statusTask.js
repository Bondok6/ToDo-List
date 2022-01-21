import Tasks from '../modules/classTasks.js';

const statusTask = (input) => {
  let status;
  Tasks.tasks.forEach((task) => {
    if (task.description === input) {
      status = task.completed;
    }
  });

  return status;
};

const changeStatus = (input) => {
  let status;

  Tasks.tasks.forEach((task) => {
    if (task.description === input) {
      task.completed = !task.completed;
      status = task.completed;
    }
  });

  return status;
};

export { statusTask, changeStatus };
