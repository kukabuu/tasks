function getLongestWord(sen) {
	const arr = sen
		.toLowerCase()
		.match(/[a-z0-9]+/gi)
		.sort((a, b) => b.length - a.length);

	const longestWordArr = arr.filter(word => word.length === arr[0].length);
	return longestWordArr.length === 1 ? longestWordArr[0] : longestWordArr;
}

console.log(getLongestWord("hello, Harry. I am your father")); //father
