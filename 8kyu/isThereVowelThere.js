// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.
//a = 97, e = 101, i = 105, o = 111, u = 117
function isVow(a) {
  return a.map((num) => {
    switch (num) {
      case 97:
        return "a";
        break;
      case 101:
        return "e";
        break;
      case 105:
        return "i";
        break;
      case 111:
        return "o";
        break;
      case 117:
        return "u";
        break;
      default:
        return num;
    }
  });
}
console.log(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]));
