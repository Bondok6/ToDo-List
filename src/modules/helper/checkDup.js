import Tasks from '../classTasks.js';

// check Duplication
const checkDuplicate = (desc) => {
  const errorMsg = document.querySelector('.error');
  const successMsg = document.querySelector('.success');
  const t = Tasks.tasks.filter((task) => desc === task.description);

  if (!t.length) {
    errorMsg.classList.add('hidden');
    successMsg.classList.remove('hidden');
    return true;
  }

  errorMsg.classList.remove('hidden');
  successMsg.classList.add('hidden');
  return false;
};

export default checkDuplicate;
