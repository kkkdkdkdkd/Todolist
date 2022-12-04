// const todoForm = document.getElementById("todoform");
// const todoInput = todoForm.querySelector("input");
// const todolist = document.getElementById("todolist");

// let toDos = [];

// function savetodos() {
//   localStorage.setItem("todos", JSON.stringify(toDos));
// }

// function deletetodo(event) {
//   const li = event.target.parentElement;
//   li.remove();

//   toDos = toDos.filter((todo) => todo.id !== parseInt(li.id, 10));
//   savetodos();
// }

// function painttodo(newtodo) {
//   const li = document.createElement("li");
//   li.id = newtodo.id;

//   const span = document.createElement("span");
//   span.innerText = newtodo.text;

//   const button = document.createElement("button");
//   button.innerText = "✔";
//   button.addEventListener("click", deletetodo);

//   li.appendChild(span);
//   span.appendChild(button);
//   todolist.appendChild(li);
// }

// function handletodo(event) {
//   event.preventDefault();

//   const newtodo = todoInput.value;
//   todoInput.value = "";
//   const newtodoObject = {
//     text: newtodo,
//     id: Date.now()
//   };

//   toDos.push(newtodoObject);
//   painttodo(newtodoObject);
//   savetodos();
// }

// todoForm.addEventListener("submit", handletodo);

// const savedtodos = localStorage.getItem("todos");

// if (savedtodos !== null) {
//   const parsedtodos = JSON.parse(savedtodos);
//   toDos = parsedtodos;
//   parsedtodos.forEach(painttodo);
// }

const toDoForm = document.getElementById("todoform");
const toDoInput = document.querySelector("#todoform input");
const toDoList = document.getElementById("todolist");

let toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id, 10));

  saveToDos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;

  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerText = "✔";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();

  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObject = {
    text: newTodo,
    id: Date.now()
  };
  toDos.push(newTodoObject);
  paintTodo(newTodoObject);

  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem("todos");

if (savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
