// HELPERS FUNCTION

// emoji variable to output with assertion
let emoji = require('node-emoji');


const assertEqual = function(actual, expected) {
  // check if 2 passsed arguments are equal
  if (actual === expected) {
    console.log(emoji.get('heart'), ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(emoji.get('warning'), ` Assertion Failed: ${actual} !== ${expected}`);
  }
};


// MAIN FUNCTION

// iterates over object elements and check if condition of callfunction is true
const findKey = (object, callfunction) => {
  for (element in object) {
    if (callfunction(object[element])) return element;
  }
};


const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"


//TEST FUNCTION
console.log(result1);
assertEqual(result1, 'noma');