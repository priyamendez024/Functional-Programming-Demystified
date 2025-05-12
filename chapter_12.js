// Chapter 12: Functional Design Patterns
// JavaScript: Functor and Applicative examples using Maybe

const Maybe = (x) => ({
  map: (f) => x ? Maybe(f(x)) : Maybe(null),
  value: x,
});

const result = Maybe(5)
  .map((x) => x * 2)
  .map((x) => x + 3);

console.log(result.value);  // 13
