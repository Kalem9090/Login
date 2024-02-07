const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Initialize tasks from local storage
loadTasksFromLocalStorage();

// Event listener for adding tasks
addTaskBtn.addEventListener("click", addTask);

function loadTasksFromLocalStorage() {
  let tasks = localStorage.getItem('tasks');
  if (tasks) {
    tasks = JSON.parse(tasks);
    tasks.forEach(task => {
      const listItem = document.createElement("li");
      listItem.textContent = task;
      taskList.appendChild(listItem);
      // Delete button for each task
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Supprimer";
      deleteBtn.addEventListener("click", () => {
        listItem.remove();
        removeTaskFromLocalStorage(task);
      });
      listItem.appendChild(deleteBtn);
    });
  }
}

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    taskList.appendChild(listItem);
    taskInput.value = "";

    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";
    deleteBtn.addEventListener("click", () => {
      listItem.remove();
      removeTaskFromLocalStorage(taskText);
    });
    listItem.appendChild(deleteBtn);

    
    saveTaskToLocalStorage(taskText);
  } else {
    alert("Veuillez entrer une tâche valide.");
  }
}

function saveTaskToLocalStorage(taskText) {
  let tasks = localStorage.getItem('tasks');
  if (!tasks) {
    tasks = [];
  } else {
    tasks = JSON.parse(tasks);
  }
  tasks.push(taskText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}







