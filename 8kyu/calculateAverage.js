// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function average(ary) {
  return ary.length !== 0
    ? ary.reduce((acc, cur) => acc + cur) / ary.length
    : 0;
}
console.log(average([2, 3, 5, 7, 8, 9]));
