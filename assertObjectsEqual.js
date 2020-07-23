// emoji variable to output with assertion
let emoji = require('node-emoji');



//  COMPARE THE ARRAYS
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  };
  return true;
};


// compare objects
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


//MAIN FUNCTION OF OBJECT ASSERT
const assertObjectsEqual = function(actual, expected) {
  // check if 2 passsed arguments are equal
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(emoji.get('heart'), ` Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(emoji.get('warning'), ` Assertion Failed: ${inspect(actual)} !==  ${inspect(expected)}`);
  }
};


// TEST FUNCTION

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(cd, dc);