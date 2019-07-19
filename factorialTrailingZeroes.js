/*
Given an integer n, return the number of trailing zeroes in n!.

Example 1:
Input: 3
Output: 0
Explanation: 3! = 6, no trailing zero.

Example 2:
Input: 5
Output: 1
Explanation: 5! = 120, one trailing zero.
*/

var trailingZeroes = function(n) {
  let result = 0;
  for (let i = n; i > 0; i = Math.floor(i / 5)) {
    result += Math.floor(i / 5);
  }
  return result;
};

console.log(trailingZeroes(30));
