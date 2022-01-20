import addTask from '../__mocks__/addTask.js';
import Tasks from '../modules/classTasks.js';
import editTask from '../__mocks__/editingTask.js';

describe('Edit task in the list', () => {
  test('', () => {
    const input = 'Task 11';
    const index = Tasks.tasks.length - 1;
    addTask(input);
    const newInput = 'New task description';
    editTask(newInput, index);
    Tasks.storage(Tasks.tasks);

    expect(Tasks.task[index].description).toThrow(newInput);
  });
});
