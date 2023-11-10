//Edit H1 element

// Get the h1 element
const editableTitle = document.getElementById('editableTitle');

// Function to update the h1 content
function updateTitle(newTitle) {
    editableTitle.textContent = newTitle;
}


//To do list add and remove item

function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
    
    if (event.key === 'Enter' && todoInput.value !== '') { // Check if Enter key is pressed
        const listItem = document.createElement('li');
        listItem.classList.add('list-item');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const todoText = document.createElement('span');
        todoText.textContent = todoInput.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        listItem.appendChild(checkbox);
        listItem.appendChild(todoText);
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);

        todoInput.value = '';

        // Edit task on double click
        todoText.addEventListener('dblclick', function() {
            const newText = prompt('Edit task', todoText.textContent);
            if (newText !== null) {
                todoText.textContent = newText;
            }
        });

        // Mark as completed
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                todoText.style.textDecoration = 'line-through';
            } else {
                todoText.style.textDecoration = 'none';
            }
        });

        // Remove task
        deleteButton.addEventListener('click', function() {
            listItem.remove();
        });
    }
}

// Event listener to trigger the addTodo function when Enter key is pressed
document.getElementById('todoInput').addEventListener('keypress', addTodo);

document.getElementById("deleteAllButton").addEventListener("click", function() {
    var todoList = document.getElementById("todoList");
    todoList.innerHTML = ""; // Clears all list items
});

//footer element
