// If you can't sleep, just count sheep!!
// Task:

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

function counting(num) {
  let sheep = "";
  for (let i = 0; i < num; i++) {
    sheep += `${i + 1} sheep...`;
  }
  return sheep;
}
console.log(counting(3));
