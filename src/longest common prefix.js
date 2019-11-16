// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

//1. horizontal search

let longestCommonPrefix = function(strs) {
	if (strs.length == 0) return "";
	let prefix = strs[0];
	for (let i = 1; i < strs.length; i++) {
		let string = strs[i].toLowerCase();
		while (string.indexOf(prefix) != 0) {
			prefix = prefix.substring(0, prefix.length - 1);
			if (prefix.length === 0) return "";
		}
	}
	return prefix;
};

//2. Vetical search

let longestCommonPrefixV = function(strs) {
	if (strs.length === 0) return "";
	for (let i = 0; i < strs[0].length; i++) {
		let char = strs[0][i];
		for (let j = 1; j < strs.length; j++) {
			if (strs[j].length === i || char !== strs[j][i]) {
				return strs[0].substring(0, i);
			}
		}
	}
	return strs[0];
};

console.log(longestCommonPrefixV(["abb", "abc"]));
