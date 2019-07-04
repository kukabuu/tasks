/*
Given two strings s and t , write a function to determine 
if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Solution 1 use Hashtable

let isAnagram1 = function(s, t) {
  let sHash = {};
  let tHash = {};

  s = s.toLowerCase();
  t = t.toLowerCase();

  addToHash(s, sHash);
  addToHash(t, tHash);

  for (let key in sHash) {
    if (sHash[key] !== tHash[key]) return false;
  }
  for (let key in tHash) {
    if (tHash[key] !== sHash[key]) return false;
  }
  return true;
};

function addToHash(str, hash) {
  for (let i = 0; i < str.length; i++) {
    hash[str[i]] = 0;
  }
  for (let i = 0; i < str.length; i++) {
    hash[str[i]]++;
  }
  return hash;
}

// Solution 2 use Arrays

let isAnagram2 = function(s, t) {
  s = s.toLowerCase();
  t = t.toLowerCase();

  let sArr = Array.from(s).sort();
  let tArr = Array.from(t).sort();

  if (sArr.length !== tArr.length) {
    return false;
  }
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] !== tArr[i]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram2("anagram", "nagaram"));
console.log(isAnagram2("a", "ba"));
