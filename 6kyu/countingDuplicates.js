// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  let tempCounter = 0;
  let counter = 0;
  let copyStr = text.toLowerCase();
  copyStr = copyStr.split("");
  for (let i = 0; i < copyStr.length; i++) {
    for (let j = copyStr.length - 1; j >= 0; j--) {
      if (i === j) continue;

      if (copyStr[i] === copyStr[j]) {
        console.log(copyStr);
        console.log(`pass i is ${i} j is ${j}`);
        tempCounter++;
        copyStr.splice(j, 1);
      }
    }
    if (tempCounter > 0) {
      console.log(`in counter`);
      counter++;
      tempCounter = 0;
    }
  }
  return counter;
}
