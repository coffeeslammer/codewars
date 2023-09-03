// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

function min(arr, toReturn) {
  const a = [...arr];
  a.sort((x, y) => x - y);
  if (toReturn === "value") return a[0];

  return arr.findIndex((x) => x == a[0]);
}
console.log(min([4, 2, 3, 1, 5], "index"));
