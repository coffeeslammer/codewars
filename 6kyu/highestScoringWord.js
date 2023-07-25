// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  let total = [0, ""];
  let tempTotal = 0;
  const test = x.split(" ");
  for (let i = 0; i < test.length; i++) {
    let tempTotal = 0;
    let temp = test[i].split("");

    for (let j = 0; j < temp.length; j++) {
      tempTotal += temp[j].charCodeAt(0) - 96;
    }
    if (tempTotal > total[0]) {
      total[0] = tempTotal;
      total[1] = test[i];
    }
  }
  return total[1];
}

console.log(high("what time are we climbing up the volcano"));
