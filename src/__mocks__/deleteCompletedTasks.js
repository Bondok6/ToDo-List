import Tasks from '../modules/classTasks.js';

const deleteAll = () => {
  const List = Tasks.tasks.filter((task) => !task.completed);

  return List;
};

export default deleteAll;
