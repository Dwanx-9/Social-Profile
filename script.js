// Function to add a new task
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    
    // Get the task value and create a new list item
    var taskText = taskInput.value;
    if (taskText.trim() === '') {
      alert('Please enter a task.');
      return;
    }
    
    var li = document.createElement('li');
    li.textContent = taskText;
    
    // Create delete button for the task
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function() {
      taskList.removeChild(li);
    };
    
    // Append the delete button to the list item
    li.appendChild(deleteBtn);
    
    // Append the list item to the task list
    taskList.appendChild(li);
    
    // Clear the input field
    taskInput.value = '';
  }
  