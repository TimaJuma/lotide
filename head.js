// import helpers function to assert for equality
let assertEqual = require('./assertEqual');


const head = function(item) {
  let length = item.length;
  if (length > 0) {
    return item[0];
  } else {
    return 'underfined';
  }
  
};

// test function with AsertEqual
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "string");