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

//use senteces
var isPalindrome = function(s) {
	if (s.length === 0) return true;

	let regExp = /[a-z0-9]/g;
	let arr = s.toLowerCase().match(regExp);
	if (arr === null) return true;

	for (i = 0; i < arr.length / 2; i++) {
		if (arr[i] !== arr[arr.length - 1 - i]) {
			return false;
		}
	}
	return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); //true
console.log(isPalindrome("./")); //true;
console.log(isPalindrome(""race a car"")); //false;
