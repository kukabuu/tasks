// Remove from the array whatever is in the following arguments.
// Return the leftover values in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy1(arr) {
	let args = Array.from(arguments);
	return arr.filter(arr => args.indexOf(arr) === -1);
}

function seekAndDestroy2(arr, ...rest) {
	return arr.filter(val => !rest.includes(val));
}

