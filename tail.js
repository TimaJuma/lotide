// FUNCTION TO RETURN TAIL OF AN ARRAY

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


const tail = function(anArray) {
  if (anArray.length !== 0) {
    return anArray.slice(1);
  } else {
    return anArray;
  }
};

// test function
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
assertEqual(tail(words).length, 3);
assertEqual([], 3);