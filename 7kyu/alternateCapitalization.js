// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below.
// Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function alternate(str) {
  let odd = "";
  let even = "";
  for (const s in str) {
    if (s % 2 === 0) {
      even += str[s].toUpperCase();
      odd += str[s];
    } else {
      odd += str[s].toUpperCase();
      even += str[s];
    }
  }
  return [even, odd];
}
console.log(alternate("abcdef"));
