// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
	return getSomeMagic(str1) === getSomeMagic(str2);
}

function getSomeMagic(str) {
	return str
		.replace(/[\W]/g, "")
		.toLowerCase()
		.split("")
		.sort()
		.join("");
}


