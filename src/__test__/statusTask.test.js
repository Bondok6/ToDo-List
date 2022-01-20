import { statusTask, changeStatus } from '../__mocks__/statusTask.js';
import addTask from '../__mocks__/addTask.js';

describe('Updating an item\'s \'completed\' status', () => {
  test('should first', () => {
    const input = 'Task 20';

    addTask(input);

    const result = statusTask(input); // status is false by default

    expect(result).toBeFalsy();
  });

  test('Checking the status updated', () => {
    const input = 'Task 20';

    addTask(input); // status is false by default

    const result = changeStatus(input); // change the status to true

    expect(result).toBeTruthy();
  });
});
