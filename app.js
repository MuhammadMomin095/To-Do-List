document.addEventListener('DOMContentLoaded', function () {
    var inputElement = document.getElementById('todo-input');
    var addButton = document.getElementById('add-btn');
    var todoList = document.getElementById('todo-list');
    // Function to add new item to the list
    var addTodo = function () {
        var todoText = inputElement.value.trim();
        if (todoText === "") {
            alert("Please enter a valid to-do item.");
            return;
        }
        // Create new li element
        var newItem = document.createElement('li');
        newItem.textContent = todoText;
        // Add delete button to each todo item
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        newItem.appendChild(deleteButton);
        // Add item to the list
        todoList.appendChild(newItem);
        inputElement.value = "";
        // Event listener to remove todo item
        deleteButton.addEventListener('click', function () {
            todoList.removeChild(newItem);
        });
    };
    // Add button event listener
    addButton.addEventListener('click', addTodo);
    // Enter key event listener
    inputElement.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            addTodo();
        }
    });
});
