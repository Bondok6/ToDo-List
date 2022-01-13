import Tasks from "./classTasks";

const getData = () => {
  if (JSON.parse(localStorage.getItem("tasks"))) {
    Tasks.tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  Tasks.arrange();
};

export default getData;
