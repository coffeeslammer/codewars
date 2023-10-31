//   [1, 2, 3, 4, 3, 2, 1];
function findEvenIndex(arr) {
  let addLeft = 0;
  let addRight = 0;
  for (let i = 0; i < arr.length; i++) {
    addLeft += arr[i];
    addRight = 0;
    for (let j = i; j < arr.length; j++) {
      addRight += arr[j];
    }
    if (addLeft == addRight) return i;
  }
  return -1;
}
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
// 1,100,50,-51,1,1
// 1, 2, 3, 4, 3, 2, 1;
