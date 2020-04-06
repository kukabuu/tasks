/*
 *  Given an array, group anagrams together
 *
 *   Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 *  Output:
 *  [
 *    ["ate","eat","tea"],
 *     ["nat","tan"],
 *     ["bat"]
 *  ]
*/

const groupAnagrams = function (strs) {
  const hash = {};

strs.forEach((str) => {
  let letters = str.split('').sort();
  
  hash[letters] ? hash[letters].push(str) : hash[letters] = [str];
})
  return Object.keys(hash).map(value => hash[value]);
};