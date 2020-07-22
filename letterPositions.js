// compare each element of array for equality
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



// MAIN FUNCTION

const letterPositions = function(sentence) {
  const results = {};
  //remove all whitespaces from sentence
  const text = sentence.replace(/\s+/g, "");
  for (let i = 0; i < text.length; i++) {
    // check if object key: value already exists
    if (results[text[i]]) results[text[i]].push(i);
    else results[text[i]]  = [i];
  }
  return results;
};


//TEST FUNCTION
assertArraysEqual(letterPositions("hello").e, [1]);