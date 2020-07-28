const assertEqual = require('./assertEqual');


// MAIN FUNCTION

// function as an argument a string and return number of letter as an object
const countLetters = function(str) {
  const letterObj = {};
  const text = str.replace(/\s+/g, "");
  for (const letter of text) {
    if (letterObj[letter]) letterObj[letter] ++;
    else letterObj[letter] = 1;
  }
  return letterObj;
};

module.exports = countLetters;




