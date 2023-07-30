// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

function encode(code) {
  const aCode = [];
  for (const l of code) {
    switch (l) {
      case "a":
        aCode.push(1);
        break;
      case "e":
        aCode.push(2);
        break;
      case "i":
        aCode.push(3);
        break;
      case "o":
        aCode.push(4);
        break;
      case "u":
        aCode.push(5);
        break;
      default:
        aCode.push(l);
    }
  }
  return aCode.join("");
}
function decode(code) {
  const aCode = [];
  for (const l of code) {
    // console.log(l);
    switch (l) {
      case "1":
        aCode.push("a");
        break;
      case "2":
        aCode.push("e");
        break;
      case "3":
        aCode.push("i");
        break;
      case "4":
        aCode.push("o");
        break;
      case "5":
        aCode.push("u");
        break;
      default:
        aCode.push(l);
    }
  }
  return aCode.join("");
}
console.log(encode("hello"));
console.log(decode("h2ll4"));
