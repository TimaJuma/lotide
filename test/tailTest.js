//import tail function
const tail = require('../tail');
const assert = require('chai').assert;




describe('#tail', ()=> {

  // case 1
  it(`return ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]`, ()=> {
    assert.deepEqual(tail([1,2,3]), [2,3]);
  });

  // case 2
  it("returns [2, 3,4] for [1,2,3,4]", () => {
    assert.deepEqual(tail([1,2,3]), [2,3]);
  }); 

  // case 3
  it("returns [2, 3,4] for [1,2,3,4]", () => {
    assert.deepEqual(tail([]), []);
  }); 

  // case 4
  it("returns [2, 3,4] for [1,2,3,4]", () => {
    assert.deepEqual(tail(""), "");
  }); 
});