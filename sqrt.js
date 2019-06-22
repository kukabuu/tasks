// implement sqrt()

const newSqrt = function(x) {
	if (x <= 1) {
		return x;
	}
	let right = x,
		left = 1;

	while (right >= left) {
		let mid = Math.floor((right + left) / 2);

		if (mid > x / mid) {
			right = mid - 1;
		} else {
			if (mid + 1 > x / (mid + 1)) {
				return mid;
			}
			left = mid + 1;
		}
	}
	return 0;
};

console.log(newSqrt(8)); // 2
