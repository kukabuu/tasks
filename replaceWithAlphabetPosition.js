/* 
Replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
*/

//solution 1
function alphabetPosition(text) {
  let textInLowerCase = text.toLowerCase();
  let aCode = "a".charCodeAt(0) - 1;
  let returnValue = [];
  for (let i = 0; i < textInLowerCase.length; i++) {
    let diff = textInLowerCase.charCodeAt(i) - aCode;
    diff > 0 && diff < 27 && returnValue.push(diff);
  }
  returnValue = returnValue.toString().replace(/,/g," ");
  
  return returnValue;
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));