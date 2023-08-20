// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  const letterCount = {};
  let i = 0;
  const stringCounter = [];
  if (string == 0) return letterCount;
  if (string.length > 1) {
    string = string.split("").sort();
  }
  for (const letter of string) {
    stringCounter.push(letter);
    if (letter != string[i + 1]) {
      letterCount[letter] = stringCounter.length;
      stringCounter.length = 0;
    }
    i++;
  }
  return letterCount;
}
