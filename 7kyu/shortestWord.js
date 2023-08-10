// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  const strArray = s.split(" ").sort((a, b) => a.length - b.length);
  let wordLength = strArray[0];
  return wordLength.length;
}
console.log(findShort("String will never be empty"));
