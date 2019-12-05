/* 
		A format for expressing an ordered list of integers is to use a comma separated list of either
		individual integers or a range of integers denoted by the starting integer separated from the end integer 
		in the range by a dash, '-'.
		The range includes all integers in the interval including both endpoints. 
		It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
		Complete the solution so that it takes a list of integers in increasing order and returns a 
		correctly formatted string in the range format.

		Example:

		solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
		// returns "-6,-3-1,3-5,7-11,14,15,17-20" 
*/

// Solution 1

function solution(list) {
	const result = [];
	let min = list[0];
	let max = min;

	list.sort((a, b) => a - b);
	if (list.length < 2) return list;

	for (let i = 1; i < list.length; i++) {
		if (list[i] - max === 1) max = list[i];
		else {
			if (max - min > 1) result.push(`${min}-${max}`);
			else if (max - min === 1) {
				result.push(min);
				result.push(max);
			} else result.push(max);
			min = list[i];
			max = min;
		}
		if (i === list.length - 1) {
			if (max - min > 1) result.push(`${min}-${max}`);
			else if (max - min === 1) {
				result.push(min);
				result.push(max);
			} else result.push(max);
		}
	}

	return result.join(',');
}

// Solution 2

function solution2(individualIntegers) {
	return individualIntegers
		.reduce(splitIntoRanges, [])
		.map(convertToRange)
		.join(',');
}

function splitIntoRanges(ranges, number) {
	if (!ranges.length) {
		ranges.push([number]);
		return ranges;
	}

	const lastRange = ranges[ranges.length - 1];
	const lastNumber = lastRange[lastRange.length - 1];

	number - lastNumber === 1 ? lastRange.push(number) : ranges.push([number]);
	return ranges;
}

function convertToRange(range) {
	return range.length < 3 ? range.join(',') : `${range[0]}-${range[range.length - 1]}`;
}

console.log(solution2([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20, 23, 24]));
// returns "-6,-3-1,3-5,7-11,14,15,17-20,23,24