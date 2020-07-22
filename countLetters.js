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

// function as an argument a string and return number of letter as an object
const countLetters = function(str) {
  const letterObj = {};
  const text = str.replace(/\s+/g, "");
  for (const letter of text) {
    if (letterObj[letter]) letterObj[letter] ++;
    else letterObj[letter] = 1;
  }
  return letterObj;
};



console.log(countLetters('abc cba d'));


//TESTNG
const myString = 'abc cba d';
const resultObject = {a:2, b:2, c:2, d:1};

// test will fail, since assert equal compares primitives
assertEqual(countLetters(myString), resultObject);