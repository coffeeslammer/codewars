// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

function spacify(str) {
  let spaced = "";
  for (s of str) {
    spaced += s + " ";
  }
  return spaced;
}
console.log(spacify("hello world"));
