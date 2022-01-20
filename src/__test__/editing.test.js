import addTask from "../__mocks__/addTask.js";
import Tasks from "../modules/classTasks.js";
import editTask from "../__mocks__/editingTask.js";

describe("Edit task in the list", () => {
  test("Edit task", () => {
    const oldInput = "Task 11";
    addTask(oldInput);

    const newInput = "New task description";

    const list = editTask(oldInput, newInput);

    expect(list).toHaveLength(1);
    expect(list[0].description).toBe(newInput);
  });
});
