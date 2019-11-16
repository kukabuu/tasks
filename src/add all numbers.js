// Return a sum of all parameters entered regardless
// of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

//1
function addAll() {
	let arr = Array.prototype.slice.call(arguments);
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

//2
function addAll1(...numbers) {
	return numbers.reduce((a, b) => a + b);
}

console.log(addAll(2, 5, 6, 7));
console.log(addAll1(2, 5, 6, 7));
