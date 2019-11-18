// loop : The time complexity for this implementation is O(n)

const fibLoop = (num) => {
	let prev = 0, 
			curr = 1;

	while (num > 1) {
		let temp = curr;
		curr = prev + curr;
		prev = temp;
		num--;
	};
	return curr;
};

// loop and array: The time complexity for this implementation is also O(n)

const fibLoopArr = (num) => {
	let memoArray = [1,1];
	for (let i = 2; i < num; i++) {
		memoArray[i] = memoArray[i - 1] + memoArray[i - 2]; 
	}
	return memoArray[num - 1];
}

// recursion: The time complexity for this implementation is O(2^n)

const fibRec = (num) => {
	if (num <= 2) return 1;
	return fibRec(num - 1) + fibRec(num -2);
}

// recurtion too

const fibSmartRec = (a = 0, b = 1, num) => {
	if (num) return fibSmartRec(b, a + b, num - 1);

	return a;
}

// recursion with memorization: The time complexity for this implementation is O(n)

const fibMemo = (num, memo) => {
	memo = memo || {};
	if (memo[num]) return memo[num];
	if (num <= 2) return 1;

	return memo[num] = fibMemo(num - 1, memo) + fibMemo(num - 2, memo);
}
console.log(fibMemo(10));