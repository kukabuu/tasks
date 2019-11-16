/*
Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
Examples:

Input: "A" Output: 1
Input: "AB" Output: 28
Input: "ZY" Output: 701
*/

const titleNumber = s => {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result = result * 26 + s[i].charCodeAt(0) - 64;
  }
  return result;
};

console.log(titleNumber("A")); //1
console.log(titleNumber("AB")); //28
console.log(titleNumber("ZY")); //701
