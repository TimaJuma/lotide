
// FUNCTION to FIND MIDDLE ELEMENTS OF ARRAY
const middle = (array) => {
  const length = array.length;
  const halfLength = Math.floor(length / 2);
  if (length === 0 || length === 1 || length === 2) return [];
  if (length % 2 === 0) return array.slice(halfLength - 1, halfLength + 1);
  else return [array[halfLength]];
};


module.exports = middle;











