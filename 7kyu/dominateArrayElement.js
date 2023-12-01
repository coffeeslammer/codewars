// An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:

// solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right.
// solve([5,4,3,2,1]) = [5,4,3,2,1]

// Notice that the last element is always included. All numbers will be greater than 0.

// More examples in the test cases.

function solve(arr) {
  let pass = false;
  const dominateArr = [];
  for (let i = 0; i < arr.length; i++) {
    pass = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        pass = false;
        break;
      }
      if (j == arr.length - 1) pass = true;
    }
    if (pass) dominateArr.push(arr[i]);
  }
  return [...dominateArr, arr[arr.length - 1]];
}
console.log(solve([16, 17, 14, 3, 14, 5, 2]));
// 16, 17, 14, 3, 14, 5, 2;
//  [[16,17,14,3,14,5,2], [17,14,5,2]],
//     [[92,52,93,31,89,87,77,105], [105]],
//     [[75,47,42,56,13,55], [75,56,55]],
//     [[67,54,27,85,66,88,31,24,49], [88,49]],
//     [[76,17,25,36,29], [76,36,29]],
//     [[104,18,37,9,36,47,28], [104,47,28]],
//  const solvedArr = arr.filter((n, i, a) => n > a[++i]);
//  solvedArr.push(arr[arr.length - 1]);
//  return [...new Set(solvedArr)];
