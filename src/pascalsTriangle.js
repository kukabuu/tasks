/*Given a non-negative integer numRows, generate 
the first numRows of Pascal's triangle.
Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let result = [];
  for (let i = 0; i < numRows; i++) {
    let curr = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        curr.push(1);
      } else {
        curr.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
    result.push(curr);
  }
  return result;
};

console.log(generate(4));
