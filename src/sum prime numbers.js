// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole
// number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

//solution 1
function sumAllPrimes(num) {
	let total = 0;

	function checkNumber(i) {
		for (let j = 2; j < i; j++) {
			if (i % j === 0) {
				return false;
			}
		}
		return true;
	}

	for (let i = 2; i <= num; i++) {
		if (checkNumber(i)) {
			total += i;
		}
	}
	return total;
}

console.log(sumAllPrimes(10));


//solution 2

const countPrimes = n => {
	let total = 0;
	let arr = [];
	for (let i = 2; i < n; i++) {
		if (arr[i] === undefined) {
			arr[i] = 1;
			total++;
			for (let j = 2; j*i < n; j++) {
				arr[i*j] = 0;
			}
		}
	}
	return total;
};