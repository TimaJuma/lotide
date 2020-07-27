const eqArrays = require('./eqArrays')


//FUNTCTION TO ASSERT ARRAY by comapring arrays with eqARRAYS and ASSERTING RESULT
const assertArraysEqual = function(actual, expected) {
  // check if 2 passsed arguments are equal
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertArraysEqual;
