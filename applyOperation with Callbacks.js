

function applyOperation(numbers, operation) {
    const result = [];
    for (let num of numbers) {
        result.push(operation(num)); // apply callback
    }
    return result;
}

// Callback functions
const double = num => num * 2;
const square = num => num * 2;

// Demonstration
console.log("Double:", applyOperation([1, 2, 3, 4], double));
console.log("Square:", applyOperation([1, 2, 3, 4], square));
