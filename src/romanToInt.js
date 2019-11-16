var romanToInt = function(s) {
	const ROMAN_NUMERALS = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	};

	let sum = 0;

	for (let i = 0; i < s.length; i++) {
		let current = ROMAN_NUMERALS[s[i]];
		let next = ROMAN_NUMERALS[s[i + 1]];

		if (next && current < next) {
			sum -= current;
		} else {
			sum += current;
		}
	}
	return sum;
};

console.log(romanToInt("CMCDIXIII"));
