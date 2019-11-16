/*
Hobbits: 1
Men: 2
Elves: 3
Dwarves: 3
Eagles: 4
Wizards: 10
On the side of evil we have:

Orcs: 1
Men: 2
Wargs: 2
Goblins: 2
Uruk Hai: 3
Trolls: 5
Wizards: 10

Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

Input:
The function will be given two parameters. Each parameter will be a string separated by a single space. Each string will contain the count of each race on the side of good and evil.

The first parameter will contain the count of each race on the side of good in the following order:
Hobbits, Men, Elves, Dwarves, Eagles, Wizards. They costs [1, 2, 3, 3, 4, 10]

The second parameter will contain the count of each race on the side of evil in the following order:
Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards. They costs [1, 2, 2, 2, 3, 5, 10]

All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

Output:
Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.
*/


function goodVsEvil(good, evil){
	const goodCost = [1, 2, 3, 3, 4, 10];
	const evilCost = [1, 2, 2, 2, 3, 5, 10];
	const goodArr = good.split(" ");
	const evilArr = evil.split(" ");

	const getReducer = (arr, arrCost) => {
		return arr.reduce((res, cur, i) =>
			+res + +cur * +arrCost[i], 0);
	};

	const goodCount = getReducer(goodArr, goodCost);
	const evilCount = getReducer(evilArr, evilCost); 
	
	if (goodCount > evilCount) return "Battle Result: Good triumphs over Evil";
	if (goodCount < evilCount) return "Battle Result: Evil eradicates all trace of Good";

	return "Battle Result: No victor on this battle field";
}

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')); //evil
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')); //good
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0')); //no