// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.
// Examples

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highest(ary) {
  const counter = {};
  for (num of ary) {
    counter[num] = !counter[num] ? 1 : counter[num] + 1;
  }

  const sorted = Object.entries(counter)
    .sort(([a], [b]) => b - a)
    .sort(([, a], [, b]) => b - a);
  console.log(sorted);
  return +sorted[0][0];
}
// console.log(highest([12, 10, 8, 12, 7, 6, 4, 10, 10]));
console.log(highest([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]));
