import Tasks from "./../modules/classTasks";
const deleteTask = (input) => {
  Tasks.tasks = Tasks.tasks.filter((task) => task.description !== input);
  Tasks.tasks.pop();
};
export default deleteTask;
