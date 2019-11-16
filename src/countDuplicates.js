/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

//Solition 1
function duplicateCount1(text){
  let count = 0;
  let obj = {};
  text = text.toLowerCase();
  for (let i in text) {
    obj[text[i]] === undefined ? obj[text[i]] = 0 :	obj[text[i]]++;
	}
	for (let i in obj) {
		obj[i] > 0 ? count++ : count;
	}
  return count;
}

//Solution 2
function duplicateCount2(text) {
	return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
duplicateCount("");
duplicateCount("abcde");
duplicateCount("aabbcde");
duplicateCount("aabBcde");
duplicateCount("Indivisibility");
duplicateCount("Indivisibilities");
