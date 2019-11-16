// Given a 32-bit signed integer, reverse digits of an integer.
// Assume we are dealing with an environment which could only store
// integers within the 32-bit signed integer range: [−231,  231 − 1].
// For the purpose of this problem, assume that your function
// returns 0 when the reversed integer overflows.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21

var reverse = function(x) {
  let xStr = x.toString();
  let result = "";

  if (xStr[0] === "-") {
    xStr = xStr.slice(1);
    result = "-";
  }

  if (xStr[xStr.length - 1] === "0") {
    xStr = xStr.slice(0, xStr.length - 1);
  }

  for (let i = xStr.length - 1; i >= 0; i--) {
    result += xStr[i];
  }

  if (result < -2147483648 || result > 2147483647) {
    return 0;
  }
  return result;
};

function reverse2(x) {
  x = x + "";
  result = x
    .split("")
    .reverse()
    .join("");
  if (result < -2147483648 || result > 2147483647) {
    return 0;
  }
  return result;
}

console.log(reverse2(123));
console.log(reverse2(-1230));
console.log(reverse2(1534236469));
