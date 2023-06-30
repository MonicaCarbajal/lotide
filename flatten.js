// const assertArrayEqual = function(array1, array2) {
//   if (eqArrays(array1, array2)) {
//     console.log(`✅ True: ${array1} is equal to ${array2}`);
//   } else {
//     console.log(`🛑 False: ${array1} is not equal to ${array2}`);
//   }
// }

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


function flatten(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])) {
      for(let j = 0; j < array[i].length; j++) {
        result.push(array[i][j]);
      }
    } else {
      result.push(array[i]);
    }  
  }
  return result;
}

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3,  5, 6]