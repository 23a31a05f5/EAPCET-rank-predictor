const addBtn = document.getElementById('add-task');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');

  li.textContent = taskText;

  // Toggle complete
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Right-click to delete
  li.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = '';
});
