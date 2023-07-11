// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

// Zero alone is fine, don't worry about it. Poor guy anyway

let testNum = 78780;

function noBoringZeros(n) {
  n = n.toString();
  // toString(n);
  while (true) {
    if (n.endsWith("0")) {
      n = n.slice(0, -1);
    } else {
      return +n;
    }
  }
}
console.log(noBoringZeros(testNum));

//I now see if I was thinking I should have used modulus (n % 10 == 0)
//I didn't realize it wasn't a string being entered when I started.
