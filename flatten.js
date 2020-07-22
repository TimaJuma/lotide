// FLATTENING FUNCTION
const flatten = function(...elements) {
  let newArray = [];
  //if element is array create nested loop to loop over array element
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      for (let j = 0; j < elements[i].length; j ++) newArray.push(elements[i][j]);
    } else {
      newArray.push(elements[i]);
    }
  }
  return newArray;
};


// ASSERTION PART
const eqArrays = function(arr1, arr2) {
  let length = arr1.length;
  for (let i = 0; i < length; i++) {
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



// TEST FUNCTION
assertArraysEqual(flatten([1,2,3], 4, 5, [6]), [1, 2, 3, 4, 5, 6]);
