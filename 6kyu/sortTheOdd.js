// Task

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sort(num) {
  const temp = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 != 0) temp.push(num[i]);
  }
  temp.sort((a, b) => a - b);
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 != 0) num[i] = temp.shift();
  }
  return num;
}
console.log(sort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
