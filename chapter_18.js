// Chapter 18: Integrating Functional Programming in Existing Codebases
// JavaScript: Refactoring an imperative to-do list app to use functional programming

let todoList = [];

const addToDo = (task) => [...todoList, { task, completed: false }];
const completeToDo = (task) => todoList.map(todo => todo.task === task ? { ...todo, completed: true } : todo);
const removeToDo = (task) => todoList.filter(todo => todo.task !== task);

todoList = addToDo("Learn JavaScript");
todoList = completeToDo("Learn JavaScript");
console.log(todoList);
