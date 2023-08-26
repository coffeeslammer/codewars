// Given a string, remove any characters that are unique from the string.

// Example:

// input: "abccdefee"

// output: "cceee"

function duplicates(str) {
  const myArray = str.split("");
  const set = new Set(myArray);
  return myArray
    .filter((item, i) => {
      if (set.has(item)) {
        set.delete(item);
        if (str.lastIndexOf(item) !== i) return item;
      } else {
        return item;
      }
    })
    .join("");
}
console.log(duplicates("colloquial"));

// Test.assertEquals(onlyDuplicates("abccdefee"), "cceee");
// Test.assertEquals(onlyDuplicates("hello"), "ll");
// Test.assertEquals(onlyDuplicates("colloquial"), "ollol");
// Test.assertEquals(onlyDuplicates("foundersandcoders"), "ondersndoders");

//TOP codewar solution
// function onlyDuplicates(str) {
//   return str
//     .split("")
//     .filter((e) => str.indexOf(e) != str.lastIndexOf(e))
//     .join("");
// }
