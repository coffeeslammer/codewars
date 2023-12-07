// You've just finished writing the last chapter for your novel when a virus suddenly infects your document. It has swapped the 'i's and 'e's in 'ei' words and capitalised random letters. Write a function which will:

// a) remove the spelling errors in 'ei' words. (Example of 'ei' words: their, caffeine, deceive, weight)

// b) only capitalise the first letter of each sentence. Make sure the rest of the sentence is in lower case.

// Example: He haD iEght ShOTs of CAffIEne. --> He had eight shots of caffeine.

function proofRead(str) {
  console.log(str);
  str = str.toLowerCase().replaceAll("ie", "ei");
  const ary = str.split(".");
  //   ary.pop();
  const fixedAry = ary.map((e) => {
    let index = 0;
    if (e.charAt(index) === " ") index++;
    return e.charAt(index).toUpperCase() + e.slice(index + 1);
  });

  return fixedAry.join(". ").trim();
}
console.log(proofRead("SHe wEnt CaNoIenG.He haD iEght ShOTs of CAffIEne"));
