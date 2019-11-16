// Given a string, find the first non-repeating character in it
// and return it's index. If it doesn't exist, return -1.

var firstUniqChar = function(s) {
  let hash = {};
  s.toLowerCase();
  addToHash(s, hash);

  function addToHash(str, hash) {
    for (char of str) {
      char in hash ? hash[char]++ : (hash[char] = 0);
    }
    return hash;
  }

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 0) return i;
  }

  return -1;
};

console.log(firstUniqChar("leetcode")); //0
console.log(firstUniqChar("loveleetcode")); //2
console.log(firstUniqChar("cc")); //-1
console.log(firstUniqChar("z")); //0
console.log(firstUniqChar("aadadaad")); //-1
