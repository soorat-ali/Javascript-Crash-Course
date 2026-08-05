const style = document.createElement("style");
style.textContent = `
  .completed {
    text-decoration: line-through;
    color: gray;
  }
`;
document.head.appendChild(style);

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter a task";

const addButton = document.createElement("button");
addButton.textContent = "Add Task";

const list = document.createElement("ul");

document.body.appendChild(input);
document.body.appendChild(addButton);
document.body.appendChild(list);

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") {
    return;
  }

  const li = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  li.appendChild(taskSpan);
  li.appendChild(deleteButton);
  list.appendChild(li);

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  deleteButton.addEventListener("click", (event) => {
    event.stopPropagation();
    li.remove();
  });

  input.value = "";
}

addButton.addEventListener("click", addTask);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
