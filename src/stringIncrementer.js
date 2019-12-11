/**
	Your job is to write a function which increments a string, to create a new string.

	If the string already ends with a number, the number should be incremented by 1.
	If the string does not end with a number. the number 1 should be appended to the new string.
 *
 */

function incrementString (string) {
	return string.replace(/\d*$/, match => {
		if (!match) return '1';
		const numStr = (+match + 1).toString();
		const diff = match.length - numStr.length;
		return diff > 0
			? '0'.repeat(diff) + numStr
			: numStr;
	});
}

console.log(incrementString("foobar000")) //"foobar001"
console.log(incrementString("foo")) //"foo1"
console.log(incrementString("foobar001"))//, "foobar002");
console.log(incrementString("foobar99"))//, "foobar100");
console.log(incrementString("foobar099"))//, "foobar100");
console.log(incrementString(""))//, "1");