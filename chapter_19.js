// Chapter 19: Testing Functional Code
// JavaScript: Unit test for sum of squares function

const sumOfSquares = (x, y) => x ** 2 + y ** 2;

test('sum of squares', () => {
  expect(sumOfSquares(3, 4)).toBe(25);
  expect(sumOfSquares(5, 12)).toBe(169);
});
