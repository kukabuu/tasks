//Solution 1:

function isInclude1(requiredStr, baseStr) {
	if (!requiredStr || !baseStr) {
		return false;
	}

	let reqArr = [].slice.call(requiredStr);
	let baseArr = [].slice.call(baseStr);
	let count = 0;

	for (let i = 0; i < reqArr.length; i++) {
		let index = baseArr.indexOf(reqArr[i]);
		if (index !== -1) {
			baseArr.splice(0, index + 1);
			count++;
		}
	}
	return count === reqArr.length ? true : false;
}

//Solution 2:
function isInclude2(requiredStr, baseStr) {
	if (!requiredStr || !baseStr) {
		return false;
	}

	let queue = requiredStr.split("");

	for (let i = baseStr.length - 1; i >= 0; i--) {
		if (queue[queue.length - 1] === baseStr[i]) {
			queue.pop();
		}
	}

	return queue.length ? false : true;
}

console.log(isInclude1("vm", "vghb")); //false
console.log(isInclude1("vb", "vghb")); //true
console.log(isInclude1("kt", "katok")); //true
console.log(isInclude1("kt", "tak")); //false

