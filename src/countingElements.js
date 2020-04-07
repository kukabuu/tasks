/*
 * Given an integer array arr, count element x such that x + 1 is also in arr.
 *If there're duplicates in arr, count them seperately.
*/
const countElements = function (arr) {
	const map = {};
	let result = 0;

	arr.forEach((i) => typeof map[i] !== 'undefined' ? map[i]++ : map[i] = 1);

	for (let key of Object.keys(map)) {
		result = typeof map[(+key + 1).toString()] !== 'undefined' ? result + map[key] : result; 
	}
	return result;
};

countElements([1,1,3,3,5,5,7,7]) //0
countElements([1,2,3]) //2
countElements([1,1,2,2]) //2
countElements([1, 3, 2, 3, 5, 0]); // 3
