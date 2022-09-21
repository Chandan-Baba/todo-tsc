"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
// btn.addEventListener("click", function () {
//   console.log(input.value);
// });
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const todos = readTodos();
todos.forEach(createToDo);
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    //type narrowing
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(event) {
    event.preventDefault();
    const newToDo = {
        text: input.value,
        completed: true,
    };
    createToDo(newToDo);
    todos.push(newToDo);
    saveToDos();
    input.value = "";
}
function createToDo(todo) {
    const newLI = document.createElement("li");
    const checkbox1 = document.createElement("input");
    checkbox1.type = "checkbox";
    checkbox1.addEventListener("change", function () {
        todo.completed == checkbox1.checked;
        console.log(todo.completed);
        saveToDos();
    });
    newLI.append(todo.text);
    newLI.appendChild(checkbox1);
    list?.append(newLI);
}
form.addEventListener("submit", handleSubmit);
