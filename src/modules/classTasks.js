class Tasks {
  static tasks = [];

  constructor(description, id, completed) {
    this.description = description;
    this.id = id;
    this.completed = false;
  }

  static storage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

export default Tasks;
