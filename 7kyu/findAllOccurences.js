// Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.

// If n is not in the given array, return an empty array [].

// Assume that n and all values in the given array will always be integers.

// Example:

// findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
function findAll(ary, n) {
  // if(ary.includes(n)){

  // }
  let x;
  const indexes = [];
  for (let i = 0; i < ary.length; i++) {
    if (ary[i] === n) indexes.push(i);
  }
  return indexes;
}
console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3));
