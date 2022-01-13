import Tasks from "./classTasks.js";
import render from "./render";

const options = (e) => {
  // Delete Task
  const targetId = +e.target.parentNode.parentNode.className;
  if (e.target.classList.contains("delete-icon")) {
    const target = e.target.parentNode.parentNode;
    Tasks.tasks = Tasks.tasks.filter((task) => task.index !== targetId);
    Tasks.arrange();
    Tasks.storage(Tasks.tasks);
    render();
    target.remove();
  }

  // Edit Task
  if (e.target.classList.contains("option-icon")) {
    const optionIcon = e.target;
    const targetInput =
      e.target.parentNode.parentNode.firstChild.nextSibling.childNodes[2];

    targetInput.removeAttribute("readonly");
    targetInput.focus();
    const span = document.createElement("span");
    span.textContent = "Save";
    optionIcon.parentNode.insertAdjacentElement("afterbegin", span);
    optionIcon.classList.add("hidden");

    span.addEventListener("click", () => {
      Tasks.tasks.forEach((task) => {
        if (task.index === targetId) {
          task.description = targetInput.value;
        }
      });
      Tasks.storage(Tasks.tasks);
      targetInput.setAttribute("readonly", "readonly");
      optionIcon.classList.remove("hidden");
      span.classList.add("hidden");
    });
  }

  // completed Task
  if (e.target.classList.contains("checkbox")) {
    e.target.nextSibling.classList.toggle("finished");
  }
};

export default options;
