// Chapter 6: JavaScript and Functional Programming: Making the Switch
// JavaScript: Example of using map, reduce, and filter

const numbers = [1, 2, 3, 4, 5];

// Using map to double each number
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// Using filter to get even numbers
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);  // [2, 4]

// Using reduce to sum the numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);  // 15
