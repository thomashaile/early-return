// two functions with the same behavior
// one uses early return
// the other uses nested conditionals
//  which is easier to understand?

function earlyReturn(a, b) {
  if (typeof a !== 'number' && typeof b !== 'number') {
    return 'a and b are not numbers';
  }
  if (typeof a !== 'number') return 'a is not a number';
  if (typeof b !== 'number') return 'b is not a number';

  return a + b;
}

function nestedConditionals(a, b) {
  let result;
  if (typeof a === 'number') {
    if (typeof b === 'number') {
      result = a + b;
    } else {
      result = 'b is not a number';
    }
  } else {
    if (typeof b === 'number') {
      result = 'a is not a number';
    } else {
      result = 'a and b are not numbers';
    }
  }
  return result;
}


const test1 = earlyReturn(0, 1) === nestedConditionals(0, 1);
const test2 = earlyReturn('0', 1) === nestedConditionals('0', 1);
const test3 = earlyReturn(0, '1') === nestedConditionals(0, '1');
const test4 = earlyReturn('0', '1') === nestedConditionals('0', '1');
console.assert(test1 && test2 && test3 && test4, 'both functions behave the same!');
