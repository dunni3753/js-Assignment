
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Load tasks from local storage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    addTask(task);
  });
}

// Save tasks to local storage
function saveTasks() {
  const tasks = Array.from(taskList.children).map(taskItem => taskItem.querySelector('.taskContent').textContent);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to add a new task
function addTask(taskContent) {
  const taskItem = document.createElement('li');
  taskItem.className = 'taskItem';
  taskItem.innerHTML = `
  <span class="taskContent">${taskContent}</span>
  <button class="deleteButton">Delete</button>
`;
  taskList.appendChild(taskItem);
  taskInput.value = '';
  taskInput.focus();
  addDeleteHandler(taskItem);
  saveTasks();
}

// Function to delete a task
function deleteTask(taskItem) {
  taskList.removeChild(taskItem);
  saveTasks();
}

// Function to add delete event handler to delete button
function addDeleteHandler(taskItem) {
  const deleteButton = taskItem.querySelector('.deleteButton');
  deleteButton.addEventListener('click', function () {
    deleteTask(taskItem);
  });
}

// Event listener for adding a new task when Enter key is pressed
taskInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter' && taskInput.value.trim() !== '') {
    addTask(taskInput.value.trim());
  }
});

// Load tasks when the page is loaded
window.addEventListener('load', loadTasks);
