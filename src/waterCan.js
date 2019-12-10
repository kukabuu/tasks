/**
 * There are n cans of water, but not all of them are completely filled with water.
 * These cans may be consolidated. Determine the minimum number of cans needed 
 * to cotain the required amount of water.
 * 
 * input: total = [3, 5, 3, 5, 5], used = [3, 2, 1, 3, 1]
 * output: 2
 */

function minCans(used, total) {
	let amountWater = used.reduce((a, b) => a + b);
	let capAmount = 0;
	total.sort((a, b) => b - a);
	for (let i = 0; i < total.length; i++) {
		if (amountWater <= 0) return capAmount;
		amountWater -= total[i];
		capAmount++;
	}
	return capAmount;
}