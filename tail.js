// FUNCTION TO RETURN TAIL OF AN ARRAY


const tail = function(anArray) {
  if (anArray.length !== 0) {
    return anArray.slice(1);
  } else {
    return anArray;
  }
};

//export
module.exports = tail;