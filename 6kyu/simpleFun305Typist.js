// Task
// John is a typist. He has a habit of typing: he never use the Shift key to switch case, just using only Caps Lock.
// Given a string s. Your task is to count how many times the keyboard has been tapped by John.
// You can assume that, at the beginning the Caps Lock light is not lit.
// Input/Output
// [input] string s
// A non-empty string. It contains only English letters(uppercase or lowercase).
// 1 ≤ s.length ≤ 10000
// [output] an integer
// The number of times John tapped the keyboard.
// Example
// For s = "a", the output should be 1.
// John hit button a.
// For s = "aa", the output should be 2.
// John hit button a, a.
// For s = "A", the output should be 2.
// John hit button Caps Lock, A.
// For s = "Aa", the output should be 4.
// John hit button Caps Lock, A, Caps Lock, a.

function keyStrokes(s) {
  let t = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toLowerCase()) {
      t++;
    } else {
      if (i + 1 != s.length && s[i + 1] === s[i + 1].toLowerCase()) {
        t += 2;
      }
      t++;
    }
  }
  if (s[s.length - 1] === s[s.length - 1].toUpperCase()) t++;
  return t;
}
console.log(keyStrokes("Aa"));
