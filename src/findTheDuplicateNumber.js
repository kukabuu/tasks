/*Given an array nums containing n + 1 integers where each integer 
is between 1 and n (inclusive), prove that at least one duplicate number must exist. 
Assume that there is only one duplicate number, find the duplicate one.

Input: [1,3,4,2,2]
Output: 2

Input: [3,1,3,4,2]
Output: 3*/

var findDuplicate1 = function(nums) {
	let obj = {};
	for (num of nums) {
		if (obj[num]) return num;
		obj[num] = true;
	}
};

var findDuplicate2 = function(nums) {
	let setNums = new Set();
	for (num of nums) {
		if (!setNums.has(num)) {
			setNums.add(num);
		} else {
			return num;
		}
	}
};
