class Tasks {
  static tasks = [];

  constructor(description, index) {
    this.description = description;
    this.index = index;
    this.completed = false;
  }

  static storage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static arrange() {
    Tasks.tasks.forEach((task, ind) => {
      task.index = ind + 1;
    });
  }
}

export default Tasks;
