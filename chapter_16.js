// Chapter 16: Functional Programming and Reactive Programming
// JavaScript: Building a reactive to-do list with RxJS

const { fromEvent } = rxjs;
const { map, filter } = rxjs.operators;

const addButton = document.getElementById('addBtn');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

// Observable for button click
const addClick$ = fromEvent(addButton, 'click');

// Observable for input change
const inputChange$ = fromEvent(todoInput, 'input').pipe(
  map(event => event.target.value)
);

// Combine observables to add todo item
addClick$.subscribe(() => {
  const todoText = todoInput.value.trim();
  if (todoText) {
    const li = document.createElement('li');
    li.textContent = todoText;
    todoList.appendChild(li);
    todoInput.value = '';
  }
});
