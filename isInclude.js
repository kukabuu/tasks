function isInclude(requiredStr, baseStr) {
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

console.log(isInclude("vm", "vghb"));
console.log(isInclude("vb", "vghb"));

