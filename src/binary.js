function getBinarySearch(list, item) {
	let low = 0,
		high = list.length - 1,
		mid,
		guess;

	while (low <= high) {
		mid = Math.floor((low + high) / 2);
		guess = list[mid];
		if (guess == item) {
			return console.log(mid);
		} else if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return console.log("Нет такого числа в массиве");
}

let myList = [1, 2, 3, 4, 5, 6];
getBinarySearch(myList, 5);
