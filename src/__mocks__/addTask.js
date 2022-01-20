import Tasks from '../modules/classTasks';

const addTask = (input) => {
  // check If the value not empty
  if (input.trim() === '') return;

  // check if there is no repetition
  const t = Tasks.tasks.filter((task) => input === task.description);
  if (t.length) return;

  // check if there is no white spaces
  if (input.startsWith(' ') || input.endsWith(' ')) input = input.trim();

  const id = Tasks.tasks.length + 1;

  const newTask = new Tasks(input, id);
  Tasks.tasks.push(newTask);
};

export default addTask;
