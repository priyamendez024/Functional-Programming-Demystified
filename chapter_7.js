// Chapter 7: Higher-Order Functions in JavaScript
// JavaScript: Example of higher-order functions

const greet = name => `Hello, ${name}!`;

const greetAll = names => names.map(greet);

console.log(greetAll(["Alice", "Bob", "Charlie"]));
// ["Hello, Alice!", "Hello, Bob!", "Hello, Charlie!"]
