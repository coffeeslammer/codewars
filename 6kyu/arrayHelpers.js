// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

//     square() must return a copy of the array, containing all values squared
//     cube() must return a copy of the array, containing all values cubed
//     average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
//     sum() must return the sum of all array values
//     even() must return an array of all even numbers
//     odd() must return an array of all odd numbers

// Note: the original array must not be changed in any case!
// Example

// var numbers = [1, 2, 3, 4, 5];

// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]

Array.prototype.square = function () {
  return this.map((e) => e * e);
};
Array.prototype.cube = function () {
  return this.map((e) => e * e * e);
};
Array.prototype.average = function () {
  if (this.length === 0) return NaN;
  const total = this.reduce((a, c) => a + c);
  return total / this.length;
};
Array.prototype.sum = function () {
  return this.reduce((a, c) => a + c);
};
Array.prototype.even = function () {
  return this.filter((e) => e % 2 === 0);
};
Array.prototype.odd = function () {
  return this.filter((e) => e % 2 !== 0);
};

// const helper = new ArrayHelper();
const numbers = [1, 2, 0, 4, 5];

// helper.average(numbers);

// console.log(numbers.square());
// console.log(numbers.cube());
// console.log(numbers.average());
// console.log(numbers.sum());
console.log(numbers.even());
// console.log(numbers.odd());
