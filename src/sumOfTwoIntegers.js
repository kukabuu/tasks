/*
Calculate the sum of two integers a and b, 
but you are not allowed to use the operator + and -.
Input: a = 1, b = 2 Output: 3
Input: a = -2, b = 3 Output: 1
*/

//reverce
var getSum1 = function(a, b) {
	let carry = (a & b) << 1;
	a ^= b;
	if (carry) return getSum1(a, carry);
	return a;
};

//loop
var getSum2 = function(a, b) {
	let carry;
	while (b) {
		carry = (a & b) << 1;
		a ^= b;
		b = carry;
	}
	return a;
};

console.log(getSum1(1, 2)); //3
console.log(getSum1(-2, 3)); //1
console.log(getSum2(1, 2)); //3
console.log(getSum2(-2, 3)); //1
