const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;

// btn.addEventListener("click", function () {
//   console.log(input.value);
// });

const form = document.querySelector("form")!;
const list = document.getElementById("todolist");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log("submitted");
// });

interface Todo {
  text: string;
  completed: boolean;
}
const todos: Todo[] = readTodos();

todos.forEach(createToDo);

function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos");
  //type narrowing
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
}

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function handleSubmit(event: SubmitEvent) {
  event.preventDefault();
  const newToDo: Todo = {
    text: input.value,
    completed: true,
  };
  createToDo(newToDo);
  todos.push(newToDo);

  saveToDos();
  input.value = "";
}

function createToDo(todo: Todo) {
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
