/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, 
find the one that is missing from the array.

Input: [3,0,1] Output: 2

Input: [9,6,4,2,3,5,7,0,1] Output: 8
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

//Solition 1
var missingNumber1 = function(nums) {
	let sortedNums = nums.sort((a, b) => a - b);
	if (sortedNums[0] !== 0) return 0;
	for (let i = 1; i < sortedNums.length; i++) {
		if (sortedNums[i] - sortedNums[i - 1] === 2) {
			return sortedNums[i] - 1;
		}
	}
	return sortedNums[sortedNums.length - 1] + 1;
};

//Solution 2
var missingNumber2 = function(nums) {
	let numsSet = new Set();
	nums.forEach(num => numsSet.add(num));

	for (let i = 0; i < nums.length + 1; i++) {
		if (!numsSet.has(i)) return i;
	}
	return -1;
};

//Solution 3
var missingNumber3 = function(nums) {
	let missing = nums.length;
	for (let i = 0; i < nums.length; i++) {
		missing ^= i ^ nums[i];
	}
	return missing;
};

console.log(missingNumber([1, 2, 3, 4])); // 0
console.log(missingNumber([1])); // 0
console.log(missingNumber([0])); // 1
console.log(missingNumber([3, 0, 1])); //2
