const tail = require('../tails');
const assertEqual = require('../assertEqual');

// TEST CODE

const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result.length, 2);
assertEqual(result[1], "Labs");