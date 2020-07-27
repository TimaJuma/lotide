const middle = require('../middle');
const assert = require('chai').assert;

console.log('================TEST MIDDLE FUNCTION==============')
//TEST MIDDLE FUNCTION

describe('#middle - given middle element of an array', ()=> {

  // case 1
  it(`return [] for [1]`, ()=> {
    assert.deepEqual(middle([1]), []);
  });
  
  // case 2
  it(`return [2] for [1, 2, 3]`, ()=> {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  }); 

  // case 3
  it(`return [3] for [1, 2, 3, 4, 5]`, ()=> {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  }); 

  // case 4
  it(`return [2, 3] for [1, 2, 3, 4]`, ()=> {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  // case 5
  it(`return [3, 4] for [1, 2, 3, 4, 5, 6]`, ()=> {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  }); 
  
});




// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);