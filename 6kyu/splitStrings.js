// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  let testArr = [];
  for (let i = 0; str.length >= 1; i++) {
    if (str.length === 1) {
      testArr[i] = str + "_";
      break;
    } else {
      testArr[i] = str.split("", 2).join("");
      str = str.split("").splice(2).join("");
    }
  }
  return testArr;
}
console.log(solution("a"));
