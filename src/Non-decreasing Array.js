// Given an array with n integers, your task is to check if it could
// become non-decreasing by modifying at most 1 element.

// We define an array is non-decreasing if array[i] <= array[i + 1]
// holds for every i (1 <= i < n).

var checkPossibility = function(nums) {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      if (i - 2 >= 0 && nums[i] < nums[i - 2]) {
        nums[i] = nums[i - 1];
      }
      count++;
    }
    if (count > 1) {
      return false;
    }
  }
  return true;
};

console.log(checkPossibility([4, 2, 1])); //false
console.log(checkPossibility([3, 4, 2, 3])); //false
console.log(checkPossibility([1, 4, 2, 3])); //true
console.log(checkPossibility([4, 2, 3])); //true
