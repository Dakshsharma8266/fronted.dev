// Q5 Boolean Logic Access System
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = false;

if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
  console.log("Secure");
} else {
  console.log("Unsafe");
}

// Test by changing values
isOwnerInside = true;
if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
  console.log("Secure");
} else {
  console.log("Unsafe");
}
