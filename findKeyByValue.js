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


//MAIN FUNCTION
const bestTVShowsByGenre = {
  sci_fi : "The expense",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// function takes takes as an arguments object of shows and a value(exact show)
const findKeyByValue = (showObject, showKey) => {
  for (const show of Object.keys(showObject)) {
    if (showObject[show] === showKey) return show;
  }
  return;
};



assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);