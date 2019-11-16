/*
Given an integer array nums, find the contiguous subarray 
(containing at least one number) which has the largest sum and 
return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

var maxSubArray = function(nums) {
  let sum = 0;
  let total = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (sum < 0) {
      sum = 0;
    }
    sum += nums[i];
    if (sum >= total) {
      total = sum;
    }
  }
  return total;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([-2, -1])); // -1
console.log(maxSubArray([-2])); // -2
