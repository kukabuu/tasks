/*Given two arrays, write a function to compute their intersection.

Input: nums1 = [1,2,2,1], nums2 = [2,2] Output: [2,2]
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4] Output: [4,9]

Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//Solution 1
var intersect1 = function(nums1, nums2) {
	const set = (obj, num) => {
		obj[num] ? obj[num]++ : (obj[num] = 1);
		return obj;
	};

	const set1 = nums1.reduce(set, {});
	const set2 = nums2.reduce(set, {});

	return Object.keys(set1).reduce((intersection, key) => {
		if (set2[key]) {
			for (let i = 0; i < Math.min(set1[key], set2[key]); i++) {
				intersection.push(+key);
			}
		}
		return intersection;
	}, []);
};
//Solution 2
var intersect2 = function(nums1, nums2) {
	let obj = {};
	let result = [];

	for (let i of nums1) {
		obj[i] ? obj[i] + 1 : (obj[i] = 1);
	}
	console.log(obj);
	for (let i of nums2) {
		if (obj[i]) {
			result.push(i);
			obj[i]--;
		}
	}
	return result;
};

intersect2([1, 2, 2, 1], [2, 2]);
