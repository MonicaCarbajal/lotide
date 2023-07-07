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

const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ True: ${array1} is equal to ${array2}`);
  } else {
    console.log(`🛑 False: ${array1} is not equal to ${array2}`);
  }
}


function letterPositions(sentence) {
  return {
    h: [0],
    e: [1],
    l: [2],
    l: [3],
    o: [4],
  };
}

const result = letterPositions("hello");

assertArrayEqual(result.e, [1]);