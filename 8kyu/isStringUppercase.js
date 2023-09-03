// Is the string uppercase?
// Task

// Create a method to see whether the string is ALL CAPS.
// Examples (input -> output)

// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

function isUppercase(str) {
  for (const s of str) {
    if (s !== s.toUpperCase()) return false;
  }
  return true;
}
console.log(isUppercase("ACSKLDFJSgSKLDFJSKLDFJ"));

//This challenge used prototype so have to change str to "this"
//That should never have been an 8kyu
