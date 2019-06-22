/* 
The count-and-say sequence is the sequence of integers with the first five terms as following:
1.     1
2.     11
3.     21
4.     1211
5.     111221
*/

var countAndSay = function(n) {
  let str = "1";
  for (let i = 2; i <= n; i++) {
    let temp = "",
      prev = str[0],
      count = 1;
    for (let j = 1; j < str.length; j++) {
      let curr = str[j];
      if (curr !== prev) {
        temp += count + prev;
        count = 1;
        prev = curr;
      } else {
        count++;
      }
    }
    temp += count + prev;
    str = temp;
  }
  return str;
};
