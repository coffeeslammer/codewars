// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

//     the second and the last letter is switched (e.g. Hello becomes Holle)
//     the first letter is replaced by its character code (e.g. H becomes 72)

// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(str) {
  return str
    .split(" ")
    .map((word) => {
      if (word.slice(0, 2) > 64) {
        if (word.length == 2) return String.fromCharCode(+word.slice(0, 2));
        if (word.length == 3)
          return String.fromCharCode(+word.slice(0, 2)) + word.slice(-1);
        return (
          String.fromCharCode(+word.slice(0, 2)) +
          word.slice(-1) +
          word.slice(3, -1) +
          word.slice(2, 3)
        );
      } else {
        if (word.length == 3) return String.fromCharCode(+word.slice(0, 3));
        if (word.length == 4)
          return String.fromCharCode(+word.slice(0, 3)) + word.slice(-1);
        return (
          String.fromCharCode(+word.slice(0, 3)) +
          word.slice(-1) +
          word.slice(4, -1) +
          word.slice(3, 4)
        );
      }
    })
    .join(" ");
}
console.log(
  decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o")
);
