var removeDuplicates = function(nums) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === nums[i + 1]) {
			nums.splice(i, 1);
			i--;

			console.log(`i = ${i}, nums = ${nums}`);
		}
	}
	return nums.length;
};

arr1 = [1, 1, 2];
arr2 = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4];

removeDuplicates(arr2);
