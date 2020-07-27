const assertEqual = require('./assertEqual');


// FUNCTION TO TEST ARRAY BY COMPARING EACH ELEMENT to ASSERT EQUALITY
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  };
  return true;
};


module.exports = eqArrays;

