const countLetters= require('../countLetters');
const assert = require('chai').assert;


// console.log(countLetters('abc cba d'));
//TESTNG
const myString = 'abc cba d';
const resultObject = {a:2, b:2, c:2, d:1};

// // test will fail, since assert equal compares primitives
// assertEqual(countLetters(myString), resultObject);


console.log('================TEST COUNT LETTERS AND RETURN RESULT AS AN OBJECT==============')
//TEST MIDDLE FUNCTION

describe('#countLetters - given a string, returns object', ()=> {

  // case 1
  it(`returns {a:2, b:2, c:2, d:1}`, ()=> {
    assert.deepEqual(countLetters(myString), resultObject);
  });

});