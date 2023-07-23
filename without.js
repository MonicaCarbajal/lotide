// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ True: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 False: ${actual} !== ${expected}`);
  }
};

function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++)
    if (array1[i] !== array2[i]) {
      return false;
    }

  return true;
}


// let source = [1, 2, 3, 4, 5];
// let itemsToRemove = [1, 3];

let source = ["hello", "world"];
let itemsToRemove = ["hello"];

function without(source, itemsToRemove) {
  return source.filter((item) => !itemsToRemove.includes(item));
}

console.log(without(source, itemsToRemove));