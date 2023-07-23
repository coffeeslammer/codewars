// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x) {
  let str = 0;
  let num = 0;
  x.forEach((n) => {
    typeof n == "string" ? (str += +n) : (num += n);
  });
  return num - str;
}
console.log(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
