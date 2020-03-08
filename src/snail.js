// Given an n x n array, return the array elements arranged from 
// outermost elements to the middle element, traveling clockwise.

// solution 1
function snail(array) {
	let result = [];
	while (array.length > 0) {
		result = result.concat(array[0]);
		array.shift();
		if (array[0]) {
			array = array[0].map((col, i) => {
				array.map((row) => {
					row[row.length - 1 - i];
				});
			});
		}
	}
	return result;
}

// solution 2
function snailV2(arr) {
	let result = [];
	while (arr.length) {
		result = result.concat(arr.shift());
		for (let i = 0; i < arr.length; i++) {
			result.push(arr[i].pop());
		}
		result = result.concat((arr.pop() || []).reverse());
		for (let i = arr.length - 1; i >= 0; i--) {
			result.push(arr[i].shift());
		}
	}
	return result;
}

snail([[]]); // [];
snail([[1]]); // [1];
snail([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]); // [1, 2, 3, 6, 9, 8, 7, 4, 5];

snail([
	[1, 2, 3, 4, 5],
	[6, 7, 8, 9, 10],
	[11, 12, 13, 14, 15],
	[16, 17, 18, 19, 20],
	[21, 22, 23, 24, 25],
]);
// [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13];
snail([
	[1, 2, 3, 4, 5, 6],
	[20, 21, 22, 23, 24, 7],
	[19, 32, 33, 34, 25, 8],
	[18, 31, 36, 35, 26, 9],
	[17, 30, 29, 28, 27, 10],
	[16, 15, 14, 13, 12, 11],
]);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
