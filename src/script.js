const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoPreview = document.getElementById('todo-preview');

const updatePreview= (taskText) => {
    todoPreview.textContent = taskText;
}

todoInput.addEventListener('input', (event) => {
    updatePreview(event.target.value);
    
});


todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskText = todoInput.value;
    if (taskText != '') {

        console.log("Task added:", taskText);
        todoInput.value = '';
        updatePreview(''); 
    }
});
