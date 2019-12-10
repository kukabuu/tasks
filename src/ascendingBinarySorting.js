/**
 * Consider an array of decimal integers.
 * We want to rearrange the array according to the following rules:
 * 1. Sort the integers in ascending order by the number of 1's 
 * 	 in their binary representations
 * 2. Elements having the same number of 1's in their binary representations
 * 		are ordered by increasing decimal value.
 * 
 * input: [7, 8, 6, 5]
 * 
 * output: [8,5,6,7]
 */

function rearrange(elements) {
	const numAndNumOfOne = elements.map(el => {
		const res = [el];
		let numOfOne = 0;
		while (el > 0) {
			if (el & 1) numOfOne++;
			el >>= 1;
		}
		res[1] = numOfOne;
		return res;
});
	return numAndNumOfOne.sort((a, b) => a[1] - b[1] || a[0] - b[0]).map(el => el[0]);
}
