var reverseString = function(s) {
	let prev = Math.floor(s.length / 2) - 1;
	let next = 0;
	if (s.length % 2 == 0) {
		next = prev + 1;
	} else {
		next = prev + 2;
	}

	while (prev > -1) {
		[s[prev], s[next]] = [s[next], s[prev]];
		// let temp = s[prev];
		// s[prev] = s[next];
		// s[next] = temp;
		prev--;
		next++;
	}
	return s;
};

function revStr(str) {
	let arr = [...str];
	let newArr = arr.map((_, i, arr) => {
		return arr[arr.length - 1 - i];
	});
	return newArr.join("");
}

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
