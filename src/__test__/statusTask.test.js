import { statusTask, changeStatus } from "../__mocks__/statusTask.js";
import addTask from "../__mocks__/addTask.js";

test("should first", () => {
  const input = "Task 20";

  addTask(input);

  expect(statusTask(input)).toBe(false);
  expect(statusTask(input)).toBeFalsy();
});

test("", () => {
  const input = "Task 20";
  addTask(input); // status is false by default

  const result = changeStatus(input); // change the status to true
  expect(result).toBe(true);
});
