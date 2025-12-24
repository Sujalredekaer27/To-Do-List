const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
    if (input.value !== "") {
        // 1. Create the list item
        const li = document.createElement('li');
        li.innerText = input.value;

        // 2. Add click event to toggle "completed" status
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // 3. Append to the list and clear input
        todoList.appendChild(li);
        input.value = "";
    }
});