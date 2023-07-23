function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ True: ${array1} is equal to ${array2}`);
  } else {
    console.log(`🛑 False: ${array1} is not equal to ${array2}`);
  }
};


const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (char !== ' ') {
      if (!results[char]) {
        results[char] = [i];
      } else {
        results[char].push(i);
      }
    }
  }

  return results;
};

const positions = letterPositions("lighthouse in the house");

console.log(letterPositions("lighthouse in the house"));
assertArrayEqual(positions['l'], [0, 11]);