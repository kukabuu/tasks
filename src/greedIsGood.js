/* Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point */

 // Solution 1
function score(dice) {
	const sortedArr = dice.slice().sort((a, b) => a - b);
	const diceValues = {
		3: {
			1: 1000,
			6: 600,
			5: 500,
			4: 400,
			3: 300,
			2: 200,
		},
		1: {
			1: 100,
			5: 50,
		},
	};
	let result = 0;
	const map = new Map();

	for (key of sortedArr) {
		if (map.has(key)) {
			map.set(key, value++)
		} else map.set(key, value = 1);
	}
	
	map.forEach((value, key) => {
		if (value >= 3) {
			result += (diceValues[1][key] 
									? diceValues[3][key] + diceValues[1][key] * (value - 3) 
									: diceValues[3][key]);
		} else {
			result += diceValues[1][key] ? diceValues[1][key] * value : 0;
		}
	});

	return result;
}

// Solution 2
/* function score(dice) {
	let diceStr = dice.slice().sort((a, b) => a - b).join('');
	let result = 0;
	const rules = [
		{ reg: /111/, score: 1000},
		{ reg: /666/, score: 600},
		{ reg: /555/, score: 500},
		{ reg: /444/, score: 400},
		{ reg: /333/, score: 300},
		{ reg: /222/, score: 200},
		{ reg: /1/, score: 100},
		{ reg: /5/, score: 50}
	];

	rules.forEach((rule) => {
		while(rule.reg.test(diceStr)) {
			diceStr = diceStr.replace(rule.reg, '');
			result += rule.score;
		}
	})

	return console.log(result);
} */

score([2, 3, 4, 6, 2]); // 0
score([4, 4, 4, 3, 3]); // 400
score([2, 4, 4, 5, 4]); // 450
score([1, 1, 1, 1, 1 ]); // 1200
