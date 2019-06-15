function isPalindrome1(str) {
	str = str
		.toLowerCase()
		.replace(/\s+/g, "")
		.split("");
	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] !== str[str.length - 1 - i]) {
			return false;
		}
	}
	return true;
}

//no convert to string
var isPalindrome2 = function(x) {
	if (x < 0 || (x % 10 == 0 && x != 0)) return false;

	let y = 0;
	while (x > y) {
		y = (x % 10) + y * 10;
		x = Math.floor(x / 10);
	}

	if (x == y || x == Math.floor(y / 10)) return true;
	else return false;
};
