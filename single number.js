/*

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
*/

let singleNumber = function(nums) {
	// let result = {};
	// for (let i = 0; i < nums.length; i++) {
	//     if (!result[nums[i]]) {
	//         result[nums[i]] = true;
	//     } else {
	//         delete result[nums[i]];
	//     }
	// }
	// return Object.keys(result)[0];

	return nums.reduce((prev, curr) => prev ^ curr, 0);
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
