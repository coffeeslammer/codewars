// An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:

// solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right.
// solve([5,4,3,2,1]) = [5,4,3,2,1]

// Notice that the last element is always included. All numbers will be greater than 0.

// More examples in the test cases.

function solve(arr) {
  const solvedArr = arr.filter((n, i, a) => n > a[++i]);
  solvedArr.push(arr[arr.length - 1]);
  return [...new Set(solvedArr)];
  //   return t;
}
console.log(solve([16, 17, 14, 3, 14, 5, 2]));
// 16, 17, 14, 3, 14, 5, 2;
