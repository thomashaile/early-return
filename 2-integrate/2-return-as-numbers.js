const evaluate = require('../evaluate');

const thingsToNumber1 = ['.', '1', '2', ':'];
const thingsToNumber2 = ['1', 'two', 'three', '10'];
const thingsToNumber3 = ['one', '2', '', 'NaN'];
const thingsToNumber4 = ['.', 1, 2, NaN];

const oddsToNumber = ['1', '3', '5'];
const evensToNumber = ['2', '4', '6'];

const returnAsNumbersTests = [
  { name: 'Test 1', args: [thingsToNumber1], expected: [1, 2] },
  { name: 'Test 2', args: [thingsToNumber2], expected: [1, 10] },
  { name: 'Test 3', args: [thingsToNumber3], expected: [2, 0] },
  { name: 'Test 4', args: [thingsToNumber4], expected: null },
  { name: 'Test 5', args: [[1, 2, 3]], expected: null },
  { name: 'Test 6', args: [oddsToNumber], expected: [1, 3, 5] },
  { name: 'Test 7', args: [evensToNumber], expected: [2, 4, 6] },
];

const returnAsNumbers = (arr) => {
  // cast all non-NaNy strings to numbers and return the new array
  // Hint: early return condition --> array contains any non-strings
};

evaluate(returnAsNumbers, returnAsNumbersTests);
