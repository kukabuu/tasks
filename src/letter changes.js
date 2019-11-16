// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function changeLetters(str) {
	let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
		if ("z" === char || "Z" === char) {
			return "a";
		} else {
			return String.fromCharCode(char.charCodeAt() + 1);
		}
	});

	newStr = newStr.replace(/[a | u | o | i | e]/gi, char => char.toUpperCase());
	return newStr;
}

console.log(changeLetters("hello there"));
