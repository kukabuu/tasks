//сумма элементов многомерного массива
let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function getSum(arr) {
	let s = 0;
	arr.forEach(function(i) {
		if (typeof i == "object") {
			s += getSum(i);
		} else {
			s += i;
		}
	});
	return s;
}

console.log(getSum(arr));
