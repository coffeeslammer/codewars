// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(nameShuffler("john McClane"));

// assert.strictEqual(nameShuffler("john McClane"), "McClane john");
// assert.strictEqual(nameShuffler("Mary jeggins"), "jeggins Mary");
// assert.strictEqual(nameShuffler("tom jerry"), "jerry tom");
