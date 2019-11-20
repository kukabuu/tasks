/* 
Given a list of integers and a single sum value, 
return the first two values (parse from the left please) 
in order of appearance that add up to form the sum.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)
 */

// Solution 1

const sumPairs = (ints, s) => {
	if (ints.length < 2) return undefined;
	const intSet = new Set();
	for (let i = 0; i < ints.length; ++i) {
		if (intSet.has(s - ints[i])) return [s - ints[i], ints[i]];
		intSet.add(ints[i]);
	}
	return undefined;
};

// Solution 2

const sumPairs2 = (ints, s) => {
	const seen = {};
	for (let i = 0; i < ints.length; i++) {
		if (seen[s-ints[i]]) return [s-ints[i], ints[i]];
		seen[ints[i]] = true;
	}
	return undefined;
};


sumPairs2([11, 3, 7, 5], 10); // [3, 7]
sumPairs2([4, 3, 2, 3, 4], 6); // [4, 2]
sumPairs2([0, 0, -2, 3], 2); // undefined
sumPairs2([1, -2, 3, 0, -6, 1], -6); // [0, -6]
sumPairs2([5, 9, 13, -3], 10); // [13, -3]
