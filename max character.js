// Return the character that is most common in a string

function getMaxCharacter(str) {
	const charObj = {};
	let maxNum = 0;
	let maxChar = "";

	str
		.toLowerCase()
		.split("")
		.forEach(item => {
			if (charObj[item]) {
				charObj[item]++;
			} else {
				charObj[item] = 1;
			}
		});

	for (let item in charObj) {
		if (charObj[item] > maxNum) {
			maxNum = charObj[item];
			maxChar = item;
		}
	}
	return maxChar;
}
console.log(getMaxCharacter("javascript")); //a

