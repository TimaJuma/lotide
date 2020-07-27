const assertArraysEqual = require('../assertArraysEqual');


console.log('===========TEST ASSERT ARRAYS EQUAL FUNCTION')
//test function
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);