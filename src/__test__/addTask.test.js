import addTask from '../__mocks__/addTask.js';
import Tasks from '../modules/classTasks.js';

describe('Add task in the list', () => {
  test('Test if the task is added correctly', () => {
    const input = 'task1';

    addTask(input);

    expect(Tasks.tasks).toHaveLength(1);

    Tasks.tasks.pop();
  });

  test('Test if the value of task is not empty', () => {
    const input = '   ';
    const input2 = '';

    addTask(input);
    addTask(input2);

    expect(Tasks.tasks).toHaveLength(0);

    expect(addTask(input)).toBeFalsy();
    expect(addTask(input2)).toBeFalsy();
  });

  test('Test if the task is not repeted || there is no repetition', () => {
    const input = 'task 1';
    const input2 = 'task 1'; // the same value
    const input3 = 'task 1'; // the same value

    addTask(input);
    addTask(input2);
    addTask(input3);

    expect(Tasks.tasks).toHaveLength(1);

    expect(addTask(input)).toBeFalsy();
    expect(addTask(input2)).toBeFalsy();
  });

  test('Test if there is no extra or indintation spaces', () => {
    const input = '          task 1       ';
    const lastInd = Tasks.tasks.length - 1;

    addTask(input);

    expect(Tasks.tasks[lastInd].description).toBe('task 1');
  });
});
