function quickSort(arr) {
	let less = [],
		greater = [];
	let m = Math.floor(arr.length / 2);

	if (arr.length == 0) {
		//base
		return [];
	} else {
		let pivot = arr[m]; //recurse
		console.log(pivot);

		for (let i = 0; i < arr.length; i++) {
			if (i == m) continue;
			if (arr[i] <= pivot) {
				less[less.length] = arr[i];
				console.log(less);
			} else {
				greater[greater.length] = arr[i];
				console.log(greater);
			}
		}
	}
	return quickSort(less).concat(arr[m], quickSort(greater));
}

let arr = [10, 5, 2, 3, 12];
let arr1 = [2];
let arr2 = [];

console.log(quickSort(arr));
// console.log(quickSort(arr1));
// console.log(quickSort(arr2));
