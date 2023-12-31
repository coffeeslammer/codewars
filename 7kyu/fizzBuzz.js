// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

//     If the value is a multiple of 3: use the value "Fizz" instead
//     If the value is a multiple of 5: use the value "Buzz" instead
//     If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]
let test = [];
for (let i = 1; i <= 100; i++) {
  test.push(i);
}
function fizzbuzz(num) {
  return num.map((n) => {
    if (n % 3 === 0 && n % 5 === 0) return "fizzbuzz";
    else if (n % 3 === 0) return "fizz";
    else if (n % 5 === 0) return "buzz";
    return n;
  });
}
console.log(fizzbuzz(test));
