const AOE = require('../assertObjectsEqual');



// TEST FUNCTION
console.log('============ ASSERT OBJECTS ARE EQUAL================')
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

AOE.assertObjectsEqual(cd, dc);

