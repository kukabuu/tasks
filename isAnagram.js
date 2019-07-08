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

// getAnagrams('нос', 'Сон', 'снедь', 'днесь'));
// [["нос", "сон"], ["днесь", "снедь"]]

function getAnagrams() {
	const isAnagram = (str1, str2) => {
		const sortStr = str =>
			str
				.toLowerCase()
				.split("")
				.sort()
				.join("");
		return sortStr(str1) === sortStr(str2);
	};
	let result = [];
	let args = [].slice.call(arguments);
	while (args.length) {
		let word = args.pop();
		let anagrams = args.filter(item => isAnagram(word, item));
		if (anagrams.length) {
			args = args.filter(item => !anagrams.includes(item));
		}
		result.push([word, ...anagrams]);
	}
	return result;
}

console.log(getAnagrams("нос", "Сон", "снедь", "днесь"));
