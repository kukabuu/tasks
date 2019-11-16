/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice 
in the array, and it should return false if every element is distinct.
*/

//Solition 1:

let containsDuplicate1 = function(nums) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[i] === nums[j]) {
				return true;
			}
		}
	}
	return false;
};

//Solution 2

let containsDuplicate2 = function(nums) {
	let arr = nums.sort((a, b) => a - b);
	for (let i = 0; i < arr.length - 1; i++) {
		console.log(arr[i], arr[i + 1]);
		if (arr[i] === arr[i + 1]) return true;
	}
	return false;
};

//Solution 3

let containsDuplicate3 = function(nums) {
	let set = new Set();
	for (number of nums) {
		console.log(
			`number ${number}, set.has(number) ${set.has(number)}, set ${set}`
		);
		if (set.has(number)) {
			return true;
		} else {
			set.add(number);
		}
	}
	return false;
};

//Solution 4

let containsDuplicate4 = function(nums) {
	let obj = {};
	for (number of nums) {
		obj[number] = obj[number] + 1 || 1; //undefined + 1 -> NaN. NaN || 1 -> 1.
		if (obj[number] > 1) return true;
	}
	return false;
};

//Solution 5

let containsDuplicate5 = function(nums) {
	return new Set(nums).size !== nums.length;
};

console.log(containsDuplicate5([1, 2, 3, 1])); //true
console.log(containsDuplicate5([1, 2, 3, 4])); //false
console.log(containsDuplicate5([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); //true
