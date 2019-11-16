//solution 1
var fizzBuzz1 = function(n) {
	let arr = [];
	for (let i = 1; i <= n; i++) {
		if (i % 5 === 0 && i % 3 === 0) {
			arr[i] = "FizzBuzz";
		} else if (i % 3 === 0) {
			arr[i] = "Fizz";
		} else if (i % 5 === 0) {
			arr[i] = "Buzz";
		} else {
			arr[i] = `${i}`;
		}
	}
	arr.shift();
	return arr;
};

//solution 2
var fizzBuzz2 = function(n) {
	return new Array(n)
		.fill(0)
		.map((a, i) => (++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || "" + i);
};

console.log(fizzBuzz1(15));
console.log(fizzBuzz2(15));
