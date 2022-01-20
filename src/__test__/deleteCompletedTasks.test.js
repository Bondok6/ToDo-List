import deleteAll from '../__mocks__/deleteCompletedTasks.js';
import addTask from '../__mocks__/addTask.js';
import { changeStatus } from '../__mocks__/statusTask.js';

describe('Test "Clear all completed" function', () => {
  test('Add a completed task and delete it', () => {
    const input = 'Task 0';
    addTask(input); // completed status is false by default

    changeStatus(input); // completed status changed to true

    const result = deleteAll();

    expect(result).toHaveLength(0);
  });

  test('Add two tasks and delete only the completed task', () => {
    const input = 'Task 0';
    const input2 = 'Task 01';
    addTask(input); // completed status is false by default
    addTask(input2);

    changeStatus(input); // completed status changed to true

    const result = deleteAll();

    expect(result).toHaveLength(1);
  });
});
