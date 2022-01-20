import Tasks from '../modules/classTasks';

const deleteTask = (input) => {
  if (Tasks.tasks.length === 0) return false;
  Tasks.tasks = Tasks.tasks.filter((task) => task.description !== input);
  Tasks.tasks.pop();
};
export default deleteTask;
