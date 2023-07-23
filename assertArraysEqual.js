const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ True: ${array1} is equal to ${array2}`);
  } else {
    console.log(`🛑 False: ${array1} is not equal to ${array2}`);
  }
};

console.log(assertArrayEqual([12, 34, 56], [12, 34, 56]));


module.exports = assertArraysEqual;