const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');



// ACTUAL FUNCTION
function middle(arrayForMiddle) {
  const length = arrayForMiddle.length;
  if (length <= 2) {
    return [];
  } else if (length % 2 === 0) {
    const midIndex = length / 2;
    return [arrayForMiddle[midIndex - 1], arrayForMiddle[midIndex]];
  } else {
    const midIndex = Math.floor(length / 2);
    return [arrayForMiddle[midIndex]];
  }
}

module.exports = middle;