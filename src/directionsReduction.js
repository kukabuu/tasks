/* 
Write a function dirReduc which will take an array of strings 
and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
Input: ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
Output: ["WEST"].
*/
// Solution 1
function dirReducLoop(arr) {
	const directions = {
		'NORTH': 'SOUTH',
		'SOUTH': 'NORTH',
		'EAST': 'WEST',
		'WEST': 'EAST',
	};
	const stack = [];
	for (let i = 0; i < arr.length; i++) {
		const lastDir = stack[stack.length - 1];
		lastDir === directions[arr[i]] ? stack.pop() : stack.push(arr[i]);
	}
	return stack;
}

// Solution 2
function dirReducReduce(plan) {
	const opposite = {
		'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
	return plan.reduce((dirs, dir) => {
		if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop();
		else dirs.push(dir);
		return dirs;
	}, []);
}

// Solution 3
function dirReducRegexp(arr) {
	let str = arr.join('');
	const pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
	while (pattern.test(str)) str = str.replace(pattern, '');
	return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}

dirReducLoop(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']); // ["WEST"]
dirReducReduce(['NORTH', 'WEST', 'SOUTH', 'EAST']); // ["NORTH", "WEST", "SOUTH", "EAST"]
dirReducRegexp(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']); // []
