const phoneNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(numbers) {
  const area = numbers.slice(0, 3).join("");
  const base = numbers.slice(3, 6).join("");
  const last = numbers.slice(6, 10).join("");
  return `(${area}) ${base}-${last}`;
}
console.log(createPhoneNumber(phoneNum));
