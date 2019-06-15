function findSmallest(arr) {
	let smallest = arr[0];
	let smallestIndex = 0;
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] < smallest) {
			smallest = arr[i];
			smallestIndex = i;
		}
	}
	return smallestIndex;
}

function selectSort(arr) {
	let sortedArray = [];
	const numberArrLength = arr.length;
	for (let i = 0; i < numberArrLength; i++) {
		let smallest = findSmallest(arr);
		sortedArray.push(arr[smallest]);
		arr.splice(smallest, 1);
	}
	return sortedArray;
}

let array = [1, 4, 7, 3, 9, 0, 5, 6];

console.log(selectSort(array));
