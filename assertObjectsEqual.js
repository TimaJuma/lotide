// helpers function
const eqArrays = require('./eqArrays');


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
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴 Assertion Failed: ${inspect(actual)} !==  ${inspect(expected)}`);
  }
};

module.exports = {eqObjects, assertObjectsEqual}

