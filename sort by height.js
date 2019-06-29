// Some people are standing in a row in a park.
// There are trees between them which cannot be moved.
// Your task is to rearrange the people by their heights
// in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(arr) {
	let tempArr = [];
	let sortedArr = [];

	arr.forEach((val, i) => {
		val === -1 ? tempArr.push(i) : sortedArr.push(val);
	});
	sortedArr = sortedArr.sort((a, b) => a - b);
	tempArr.forEach(val => sortedArr.splice(val, 0, -1));
	return sortedArr;
}
a = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(sortByHeight(a));
