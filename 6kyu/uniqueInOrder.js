// Implement the function unique_in_order which takes as argument a sequence and returns a list of items
// without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

function uniqueInOrder(str) {
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    if (i + 1 <= str.length && str[i] !== str[i + 1]) {
      temp += str[i];
    }
  }
  if (Number.isInteger(+temp)) {
    let test = temp.split("");
    let t = [];
    for (let j = 0; j < test.length; j++) {
      t.push(+test[j]);
    }
    return t;
  }
  return temp.split("");
}
console.log(uniqueInOrder("ABBCcAD"));

//TODO this is not my solution but I really liked it so I wanted to save it
//so I could better examine it for future use ideas

// function uniqueInOrder(it) {
//   var result = [];
//   var last;

//   for (var i = 0; i < it.length; i++) {
//     if (it[i] !== last) {
//       result.push((last = it[i]));
//     }
//   }

//   return result;
// }
