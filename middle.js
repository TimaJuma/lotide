// HELPER FUNCTIONS


// compare each element of array for equality
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};


// emoji variable to output with assertion
let emoji = require('node-emoji');


const assertArraysEqual = function(actual, expected) {
  // check if 2 passsed arguments are equal
  if (eqArrays(actual, expected)) {
    console.log(emoji.get('heart'), ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(emoji.get('warning'), ` Assertion Failed: ${actual} !== ${expected}`);
  }
};




// MAIN FUNCTION
const middle = (array) => {
  const length = array.length;
  const halfLength = Math.floor(length / 2);
  if (length === 0 || length === 1 || length === 2) return [];
  if (length % 2 === 0) return array.slice(halfLength - 1, halfLength + 1);
  else return [array[halfLength]];
};


//TEST MIDDLE FUNCTION

assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);








