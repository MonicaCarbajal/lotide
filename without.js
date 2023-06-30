// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ True: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑 False: ${actual} !== ${expected}`);
//   }
// };

// function eqArrays(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }

//   for (let i = 0; i < array1.length; i++)
//     if (array1[i] !== array2[i]) {
//       return false;
//     }

//   return true;
// }


let source = [1, 2, 3, 4, 5];
let itemsToRemove = [1, 3];

function without(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if(itemsToRemove.includes(source[i])) {

    } else {
      result.push(source[i]);
    }
    
} return result;
}

console.log(without(source, itemsToRemove));