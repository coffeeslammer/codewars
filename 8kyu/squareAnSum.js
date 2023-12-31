// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.

function squareSum(number) {
  let temp = 0;
  for (const n of number) {
    temp += n ** 2;
  }
  return temp;
}
console.log(squareSum([0, 3, 4, 5]));
