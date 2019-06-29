// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
	let chunkedArr = [];
	for (let i = 0; i < arr.length; i += len) {
		chunkedArr.push(arr.slice(i, i + len));
	}
	return chunkedArr;
}

