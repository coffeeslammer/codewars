// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  return str
    .split(" ")
    .map((l) => l.split("").reverse().join(""))
    .join(" ");
}
console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
