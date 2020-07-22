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


const eqArrays = function(arr1, arr2) {
  let length = arr1.length;
  for (let i = 0; i < length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// test function
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);// => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);// => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);// => should FAIL