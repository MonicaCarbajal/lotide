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

  return;
}

  
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }
  
  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];
  
    if (typeof value1 === 'object' && typeof value2 === 'object') {
      if (!eqObjects(value1, value2)) {
        return false;
      }
    } else if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  
  return true;
};


const obj1 = { a: 1, b: 2, c: { d: 3, e: { f: 4 } }, arr: [1, 2, [3, 4]] };
const obj2 = { a: 1, b: 2, c: { d: 3, e: { f: 4 } }, arr: [1, 2, [3, 4]] };

console.log(eqObjects(obj1, obj2)); 