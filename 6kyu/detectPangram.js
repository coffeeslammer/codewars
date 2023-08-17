// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram.
// Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(str) {
  const l = str.toLowerCase().match(/[a-z]/g).sort().join("").trim();
  if (l[0] !== "a") return false;
  let next = 97;
  for (let i = 0; i < l.length; i++) {
    if (l.charCodeAt(i) == next || l.charCodeAt(i) == next + 1) {
      if (l.charCodeAt(i) == next + 1 && l.charCodeAt(i - 1) == next) next++;
      // console.log(`here at index ${i} `);
      if (l.charCodeAt(i) == 122) return true;
    }
  }
  return false;
}
console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));

// function uniqueInOrder(it) {
//   var result = [];
//   var last;

//   for (var i = 0; i < it.length; i++) {
//     if (it[i] !== last) {
//       result.push((last = it[i]));
//     }
//   }

//   return result;
// }
