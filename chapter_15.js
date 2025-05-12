// Chapter 15: Functional Programming in JavaScript: A Deep Dive
// JavaScript: Using map, reduce, and filter to manipulate arrays

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);  // [2, 4]

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);  // 15
