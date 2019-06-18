let arr = [1, 2, 3, 4, 5];
let arr2 = [-2, -1, 0, 1];

function getSumsV2(array) {
	let result = [];

	let totalResult = array.reduce((accum, currentValue) => {
		result.push(accum);
		return accum + currentValue;
	});
	result.push(totalResult);
	return result;
}

console.log(getSums(arr)); // [ 1, 3, 6, 10, 15 ]
console.log(getSums(arr2)); //  [-2,-3,-3,-2]
