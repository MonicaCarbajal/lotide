const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ True: ${array1} is equal to ${array2}`);
  } else {
    console.log(`🛑 False: ${array1} is not equal to ${array2}`);
  }
}

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

// TEST CODE
console.log(middle([1]));      
console.log(middle([1, 2]));           
console.log(middle([1, 2, 3]));       
console.log(middle([1, 2, 3, 4]));   
console.log(middle([1, 2, 3, 4, 5])); 
console.log(middle([1, 2, 3, 4, 5, 6])); 
console.log(middle([1, 2, 3, 4, 5, 6, 7])); 
console.log(middle(["hello", "world", "it is", "me"])); 
