const assert = require('chai').assert;
const head = require('../head');

describe('#head', ()=> {
  it("returns 1 for [1, 2, 3]", ()=> {
    assert.strictEqual(head([1,2,3]), 1);
  });

  // case 2
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  }); 
  // case 3
  it("returns Hello for [Hello, Lighthouse, Labs]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hello');
  }); 
  //case 4
  it("returns underfined for []", () => {
    assert.strictEqual(head([]), 'underfined');
  }); 

});

