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


//  COMPARE THE ARRAYS
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  };
  return true;
};


// MAIN FUNCTION
const eqObjects = (object1, object2) =>{
  
  //compare lengthes of objects if same procced wfor element check
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  //if size of objects are same compare each key and value
  for (item in object1){
    if (Array.isArray(object1[item])) {
      if (!eqArrays(object1[item], object2[item])) return false;
    }
    else if(!object2[item] || object1[item] !== object2[item]) return false;
  }
  return true;
}


//TEST FUNCTION

// identical CASE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true
console.log('--------------------- end of test1')

// NOT indetical CASE
const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
console.log('--------------------- end of test2')

//identical CASE
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => false
console.log('--------------------- end of test3')

// NOT identical CASE
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
console.log('--------------------- end of test4')
