function max(arr) {
	let num = arr.slice();

	if (num.length == 1) {
		// base case
		return console.log(arr[0]);
	}

	if (num[0] > num[1]) {
		// reverce
		num.splice(1, 1);
	} else {
		num.splice(0, 1);
	}
	return max(num);
}

let array = [1, 2, 3, 4, 5, 6, 7];
max(array);
