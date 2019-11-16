/*Write a function that takes an unsigned integer and return the number of '1' bits
it has (also known as the Hamming weight).

Input: 00000000000000000000000000001011 Output: 3

Input: 00000000000000000000000010000000 Output: 1

Input: 11111111111111111111111111111101 Output: 31*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
//Solution 1
var hammingWeight1 = function(n) {
	let str = n.toString(2);
	let count = 0;
	for (num of str) {
		if (num === "1") {
			count++;
		}
	}
	return count;
};

//Solution 2
var hammingWeight = function(n) {
	return n.toString(2).replace(/0/g, "").length;
};
