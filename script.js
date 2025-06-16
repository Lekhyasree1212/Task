function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const taskList = document.getElementById('taskList');

  const listItem = document.createElement('li');
  listItem.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.onclick = () => listItem.remove();

  listItem.appendChild(deleteBtn);
  taskList.appendChild(listItem);

  input.value = '';
}
