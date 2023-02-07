const inputField = document.getElementById("inputField");
const addToDo = document.getElementById("addToDo");
const toDoContainer = document.getElementById("toDoContainer");

// load to-do items from local storage when page loads
window.onload = function () {
  if (localStorage.getItem("toDoList")) {
    toDoContainer.innerHTML = localStorage.getItem("toDoList");
    const deleteButtons = document.querySelectorAll("button");
    deleteButtons.forEach(function (deleteButton) {
      deleteButton.addEventListener("click", function () {
        deleteButton.parentElement.remove();
        localStorage.setItem("toDoList", toDoContainer.innerHTML);
      });
    });
  }
};

inputField.addEventListener("input", function () {
  if (inputField.value) {
    addToDo.style.backgroundColor = "green";
  } else {
    addToDo.style.backgroundColor = "rgb(40, 166, 208)";
  }
});

addToDo.addEventListener("click", function () {
  if (!inputField.value) return;
  const toDo = document.createElement("div");
  toDo.innerHTML = inputField.value;
  addToDo.style.backgroundColor = "rgb(40, 166, 208)";
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.addEventListener("click", function () {
    toDo.remove();
    localStorage.setItem("toDoList", toDoContainer.innerHTML);
  });
  toDo.appendChild(deleteButton);
  toDoContainer.appendChild(toDo);
  inputField.value = "";
  localStorage.setItem("toDoList", toDoContainer.innerHTML);
});
