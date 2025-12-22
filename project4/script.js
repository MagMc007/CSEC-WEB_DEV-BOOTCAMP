const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const totalTodos = document.getElementById("totalTodos");
const completedTodos = document.getElementById("completedTodos");
const clearAllBtn = document.getElementById("clearAll");
const emptyMessage = document.getElementById("emptyMessage");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Enable / Disable Add Button
todoInput.addEventListener("input", () => {
    addBtn.disabled = todoInput.value.trim() === "";
});

// Save to localStorage
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Update counters & empty message
function updateUI() {
    totalTodos.textContent = todos.length;
    completedTodos.textContent = todos.filter(t => t.completed).length;
    emptyMessage.style.display = todos.length === 0 ? "block" : "none";
}

// Create Todo Element
function createTodoElement(todo, index) {
    const li = document.createElement("li");
    if (todo.completed) li.classList.add("completed");

    const span = document.createElement("span");
    span.textContent = todo.text;

    const btnDiv = document.createElement("div");
    btnDiv.className = "todo-buttons";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    completeBtn.addEventListener("click", () => {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
    });

    editBtn.addEventListener("click", () => {
        const newText = prompt("Edit todo:", todo.text);
        if (newText && newText.trim() !== "") {
            todo.text = newText.trim();
            saveTodos();
            renderTodos();
        }
    });

    deleteBtn.addEventListener("click", () => {
        todos.splice(index, 1);
        saveTodos();
        renderTodos();
    });

    btnDiv.append(completeBtn, editBtn, deleteBtn);
    li.append(span, btnDiv);
    return li;
}

// Render Todos
function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
        todoList.appendChild(createTodoElement(todo, index));
    });
    updateUI();
}

// Add Todo
addBtn.addEventListener("click", () => {
    const text = todoInput.value.trim();
    if (text === "") {
        alert("Please enter a todo!");
        return;
    }

    todos.push({ text, completed: false });
    saveTodos();
    renderTodos();

    todoInput.value = "";
    addBtn.disabled = true;
});

// Clear All
clearAllBtn.addEventListener("click", () => {
    todos = [];
    saveTodos();
    renderTodos();
});

// Initial Load
renderTodos();
