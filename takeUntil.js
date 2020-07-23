// ASSERT ARRAY - HELPERS FUNCTION
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  };
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



//MAIN FUNCTION


const takeUntil = (array, callfunction)=> {
  const results = [];
  for (item of array){
    if (!callfunction(item)) results.push(item);
    else return results;
  }
  return results;
};



  //TEST TAKEUNTIL FUNCTION 
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


// TEST with ASSERT ARRAYS
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2])
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood",])
