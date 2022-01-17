import Tasks from '../classTasks.js';

const getData = () => {
  if (JSON.parse(localStorage.getItem('tasks'))) {
    Tasks.tasks = JSON.parse(localStorage.getItem('tasks'));
  }
};

export default getData;
