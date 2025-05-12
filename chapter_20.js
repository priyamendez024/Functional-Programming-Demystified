// Chapter 20: Building Real-World Projects
// JavaScript: Functional to-do list app

let todoList = [];

const addToDo = (task) => [...todoList, { task, completed: false }];
const completeToDo = (task) => todoList.map(todo => todo.task === task ? { ...todo, completed: true } : todo);
const removeToDo = (task) => todoList.filter(todo => todo.task !== task);

todoList = addToDo("Learn JavaScript");
todoList = completeToDo("Learn JavaScript");
console.log(todoList);
