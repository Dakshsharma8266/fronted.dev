// Q6 Event-Based Counter Simulation
let count = 0;

function increment() {
  count++;
  console.log("Count:", count);

  function logInside() {
    console.log("Inside Nested Function Count:", count);
  }
  logInside();
}

function decrement() {
  count--;
  console.log("Count:", count);
}

// Simulating clicks
increment();
increment();
decrement();
increment();
