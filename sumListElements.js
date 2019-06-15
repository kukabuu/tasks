function sumElements(list) {
	if (list.length == 1) return 1; // base case
	return 1 + sumElements(list.slice(1)); // recurse
}

let array = [1, 2, 3, 4, 5, 6, 7];

console.log(sumElements(array));
