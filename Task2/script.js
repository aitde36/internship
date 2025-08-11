const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add event listener to Add button
addBtn.addEventListener('click', addTask);
todoInput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    const text = todoInput.value.trim();
    if (!text) return;

    // Create list item
    const li = document.createElement('li');
    li.className = 'todo-item';

    // Task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = text;
    li.appendChild(taskSpan);

    // Complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✔';
    completeBtn.className = 'complete-btn';

    completeBtn.onclick = function () {
        li.classList.toggle('completed');
    };
    li.appendChild(completeBtn);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✖';
    deleteBtn.className = 'delete-btn';

    deleteBtn.onclick = function () {
        todoList.removeChild(li);
    };
    li.appendChild(deleteBtn);

    // Append to list
    todoList.appendChild(li);

    // Clear input
    todoInput.value = '';
    todoInput.focus();
}