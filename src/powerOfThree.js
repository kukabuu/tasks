//Given an integer, write a function to determine if it is a power of three.

//Solution 1
var isPowerOfThree1 = function(n) {
	if (n === 0) return false;
	while (n !== 1) {
		if (n % 3 === 0) {
			n = n / 3;
		} else return false;
	}
	return true;
};

//Solution 2
var isPowerOfThree2 = function(n) {
	return /^10*$/.test(n.toString(3));
};
