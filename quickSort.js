function quickSort(arr) {
	let less = [],
		greater = [];

	if (arr.length == 0) {
		//base
		return [];
	} else {
		let pivot = arr[0]; //recurse
		console.log(pivot);
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] <= pivot) {
				less[less.length] = arr[i];
				console.log(less);
			} else {
				greater[greater.length] = arr[i];
				console.log(greater);
			}
		}
	}
	return quickSort(less).concat(arr[0], quickSort(greater));
}

let arr = [10, 5, 2, 3, 12];
let arr1 = [2];
let arr2 = [];

console.log(quickSort(arr));
// console.log(quickSort(arr1));
// console.log(quickSort(arr2));
