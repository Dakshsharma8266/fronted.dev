// Q1 Scope Conflict Resolver
let bonus = 5000; // global variable

function calculateSalary(isPermanent) {
  let salary = 40000; // local variable
  if (isPermanent === true) {
    salary += bonus;
  }
  console.log(`Total Salary: ${salary}`);
}

calculateSalary(true);   // bonus applied
calculateSalary(false);  // bonus not applied
console.log("Global bonus still:", bonus); // shows global remains unchanged
