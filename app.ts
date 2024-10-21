document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById('todo-input') as HTMLInputElement;
    const addButton = document.getElementById('add-btn') as HTMLButtonElement;
    const todoList = document.getElementById('todo-list') as HTMLUListElement;
    
    // Function to add new item to the list
    const addTodo = () => {
        const todoText = inputElement.value.trim();
        if (todoText === "") {
            alert("Please enter a valid to-do item.");
            return;
        }
        
        // Create new li element
        const newItem = document.createElement('li');
        newItem.textContent = todoText;

        // Add delete button to each todo item
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        newItem.appendChild(deleteButton);

        // Add item to the list
        todoList.appendChild(newItem);
        inputElement.value = "";

        // Event listener to remove todo item
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(newItem);
        });
    };

    // Add button event listener
    addButton.addEventListener('click', addTodo);

    // Enter key event listener
    inputElement.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addTodo();
        }
    });
});
