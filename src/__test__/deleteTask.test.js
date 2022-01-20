import addTask from '../__mocks__/addTask.js';
import Tasks from '../modules/classTasks.js';
import deleteTask from '../__mocks__/deleteTask.js';

describe('Remove task in the list', () => {
  test('Remove the target task', () => {
    const input = 'task10';
    addTask(input); // Add Task

    deleteTask(input); // Remove Task

    deleteTask('task 1'); // Remove another Task

    expect(Tasks.tasks).toHaveLength(0);
  });

  test('Test if the array is empty', () => {
    expect(Tasks.tasks.length).toBeFalsy();
  });
});
