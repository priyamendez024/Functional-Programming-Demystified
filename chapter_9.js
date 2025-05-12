// Chapter 9: Immutability and State Management
// JavaScript: Managing state immutably with Redux

const state = { count: 0 };

// Action to increment count
const increment = (state) => ({ ...state, count: state.count + 1 });

const newState = increment(state);
console.log(newState); // { count: 1 }
