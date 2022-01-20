import Tasks from '../modules/classTasks.js';

const editTask = (input, index) => {
  // Edit Task
  Tasks.tasks.forEach((task) => {
    if (task.index === index) {
      task.description = input;
    }
  });
};

export default editTask;
