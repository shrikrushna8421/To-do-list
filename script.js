document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addButton');
    addButton.addEventListener('click', addTask);
  
    function addTask() {
      const taskInput = document.getElementById('taskInput');
      const taskText = taskInput.value.trim();
  
      if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function() {
          listItem.remove();
        });
  
        listItem.appendChild(deleteButton);
  
        const taskList = document.getElementById('taskList');
        taskList.appendChild(listItem);
  
        taskInput.value = '';
      } else {
        alert('Please enter a task!');
      }
    }
  });
  