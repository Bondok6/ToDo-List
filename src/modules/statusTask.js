import Tasks from './classTasks.js';

const statusTask = () => {
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      const { target } = e;
      const targetId = +target.parentNode.parentNode.className - 1;
      if (target.checked) {
        target.nextSibling.classList.add('finished');
        Tasks.tasks[targetId].completed = true;
        Tasks.storage(Tasks.tasks);
      } else {
        target.nextSibling.classList.remove('finished');
        Tasks.tasks[targetId].completed = false;
        Tasks.storage(Tasks.tasks);
      }
    });
  });
};

export default statusTask;
