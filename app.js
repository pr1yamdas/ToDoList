const todoList = [];

function rendertodolist() {
    let todoHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<div class="todo-item">
                        <p>${todo.name}</p>
                        <p class="deadline">${formatDate(todo.deadline)}</p>
                        <button class="delete-button" onclick="deleteTodo(${i})">Delete</button>
                      </div>`;
        todoHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoHTML;
}

function addTodo() {
    const nameInput = document.querySelector('.js-name-input');
    const deadlineInput = document.querySelector('.js-deadline-input');

    const name = nameInput.value.trim();
    const deadline = deadlineInput.value;

    if (name !== '' && deadline !== '') {
        const todo = { name, deadline };
        todoList.push(todo);

        nameInput.value = '';
        deadlineInput.value = '';

        rendertodolist();
    } else {
        alert('Please enter both a todo and a deadline.');
    }
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    rendertodolist();
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}
