// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  const arrayString = [];
  let tempIndex = 0;
  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      arrayString.push(string.slice(tempIndex, i));

      tempIndex = i;
    }
    if (i == string.length - 1 && tempIndex != i) {
      arrayString.push(string.slice(tempIndex));
    }
  }
  return arrayString.join(" ");
}
console.log(solution("handGroupGood"));

// findGreatGroupHigh
// takeNextNounsTry
// handGroupGoodAble;
// tellWomanWorkGreat
// badLongYearYoung
// haveBigBig
