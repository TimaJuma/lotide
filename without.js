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


const without = function(array, word) {
  let newArray = [];
  
  // check condition for 2nd argument not to be array
  if (Array.isArray(word)) {
    for (let item of array) {
      for (let i of word) {
        // make sure pushed only item not in word array
        if (item !== i && newArray.includes(item) === false && word.includes(item) === false) newArray.push(item);
      }
    }
  } else {
    for (let item of array) {
      if (item !== word) newArray.push(item);
    }
  }
  
  return newArray;
};


const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));

console.log(words.includes("helo"));

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]));// => ["1", "2"]



//test function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);