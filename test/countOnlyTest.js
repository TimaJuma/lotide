const countOnly = require('../countOnly');
const assert = require('chai').assert;


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

console.log('================TEST NUMBER OF PASSED ARGUMENTS WITHIN GIVEN ARRAY==============')
//TEST MIDDLE FUNCTION

describe('#countPosition ', ()=> {

  // case 1
  it(`return 1`, ()=> {
    assert.equal(result1["Jason"], 1);
  });

  // case 2
  it(`underfined`, ()=> {
    assert.equal(result1["Karima"], undefined);
  });

  // case 2
  it(`return 2`, ()=> {
    assert.equal(result1["Fang"], 2);
  });
});
