// Q2.js - Event Loop Order

console.log("Start");

// Macrotask
setTimeout(() => console.log("setTimeout callback"), 0);

// Microtask
Promise.resolve().then(() => console.log("Promise callback"));

console.log("End");

/*
Explanation:
- JS runs synchronous code first.
- Then microtasks (Promises) run before macrotasks (setTimeout).
*/
