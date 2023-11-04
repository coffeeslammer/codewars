// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  const comparator = {};
  let newWord = "";

  for (let s of word.toLowerCase()) {
    comparator[s] >= 1 ? comparator[s]++ : (comparator[s] = 1);
  }
  for (let c of word.toLowerCase()) {
    if (comparator[c] > 1) newWord += ")";
    else newWord += "(";
  }
  return newWord;
}
console.log(duplicateEncode("(( @"));
