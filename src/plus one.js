var plusOne = function(digits) {
	var i = digits.length - 1;
	digits[i]++;
	while (digits[i] > 9) {
		digits[i] = 0;
		if (i > 0) {
			digits[i - 1]++;
			i--;
		} else {
			digits.unshift(1);
			break;
		}
	}
	return digits;
};

console.log(plusOne([1, 2, 3]));

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
console.log(plusOne([9]));
