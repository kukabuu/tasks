// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flatArray(arr) {
	//1
	// return arr.reduce((a, b) => a.concat(b));
	//2
	return [].concat(...arr);
}

console.log(flatArray([[1, 2], [3, 4], [5, 6], [7]]));
