// Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

function missingLetter(ary) {
  let str = ary.join("");
  let index = str.charCodeAt(0);
  for (let i = 0; i < ary.length; i++) {
    if (str.charCodeAt(i) !== index) return String.fromCharCode(index);
    index++;
  }
}
console.log(missingLetter(["a", "b", "c", "d", "f"]));
