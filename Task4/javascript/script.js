// Get references to the elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const toggleBtn = document.getElementById('toggle-btn');
const toggleIcon = document.getElementById('toggle-icon');

// Function to add a new todo item
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const todoTextSpan = document.createElement('span');
        todoTextSpan.textContent = todoText;
        const removeIcon = document.createElement('i');
        removeIcon.classList.add('remove-icon');
        removeIcon.classList.add('fas');
        removeIcon.classList.add('fa-cut');

        listItem.appendChild(checkbox);
        listItem.appendChild(todoTextSpan);
        listItem.appendChild(document.createTextNode('\u00A0\u00A0')); // Tab space
        listItem.appendChild(removeIcon);
        todoList.appendChild(listItem);
        todoInput.value = '';

        // Event listener for the remove icon
        removeIcon.addEventListener('click', function() {
            listItem.remove();
        });
    }
}

// Event listener for the add button
addBtn.addEventListener('click', addTodo);

// Event listener for the Enter key
todoInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});

// Function to toggle the theme
function toggleTheme() {
    const body = document.body;
    const container = document.querySelector('.container');
    const heading = document.querySelector('h1');
    body.classList.toggle('dark-theme');
    container.classList.toggle('dark-theme');
    heading.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        toggleIcon.classList.remove('fa-sun');
        toggleIcon.classList.add('fa-moon');
    } else {
        toggleIcon.classList.remove('fa-moon');
        toggleIcon.classList.add('fa-sun');
    }
}
// Event listener for the theme toggle button
toggleBtn.addEventListener('click', toggleTheme);