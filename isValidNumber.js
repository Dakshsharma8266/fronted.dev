"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validData = [];
let invalidData = [];

function isValidNumber(value) {
  const num = Number(value);
  return !isNaN(num) && typeof num === "number";
}

apiData.forEach((item) => {
  let numberValue = Number(item);
  let booleanValue = Boolean(item);
  let stringValue = String(item);

  if (isValidNumber(item)) {
    validData.push({ original: item, number: numberValue, boolean: booleanValue, string: stringValue });
  } else {
    invalidData.push({ original: item, number: numberValue, boolean: booleanValue, string: stringValue });
  }
});

console.log("===== VALID DATA =====");
console.log(validData);

console.log("===== INVALID DATA =====");
console.log(invalidData);
