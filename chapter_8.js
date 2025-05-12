// Chapter 8: Recursion: The Heart of Functional Programming
// JavaScript: Recursive function for Fibonacci series

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // Output: 5
