// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
	let even = 0;
	let odd = 0;
	arr.forEach(val => (val % 2 === 0 ? (even += val) : (odd += val)));
	return [even, odd];
}
console.log(evenOddSums([50, 60, 60, 45, 71]));
