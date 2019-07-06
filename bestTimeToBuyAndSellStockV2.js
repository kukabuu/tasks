/*
Say you have an array for which the ith element is the price 
of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete 
as many transactions as you like (i.e., buy one and sell one share 
of the stock multiple times).

Note: You may not engage in multiple transactions at the same time 
(i.e., you must sell the stock before you buy again).

Example 1:

Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), 
profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), 
profit = 6-3 = 3.

Example 2:

Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), 
profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell 
them later, as you are
engaging multiple transactions at the same time. You must 
sell before buying again.

Example 3:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

//Solution 1

var maxProfit = function(prices) {
  let minPrice = prices[0];
  let profit = 0;
  let totalProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (minPrice > prices[i]) {
      minPrice = prices[i];
      totalProfit += profit;
      profit = 0;
    } else if (profit < prices[i] - minPrice) {
      profit = prices[i] - minPrice;
    } else {
      minPrice = prices[i];
      totalProfit += profit;
      profit = 0;
    }
  }
  if (profit) {
    totalProfit += profit;
  }
  return totalProfit;
};

//Solution 2

var maxProfit2 = function(prices) {
  let profit = 0,
    buy = prices[0],
    sell = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      sell = prices[i];
    } else {
      profit += sell - buy;
      sell = prices[i];
      buy = prices[i];
    }
  }

  profit += sell - buy;
  return profit;
};

//Solution 3

function maxProfit3(prices) {
  return prices.reduce(
    (profit, price, i, prices) =>
      i > 0 && price > prices[i - 1] ? profit + price - prices[i - 1] : profit,
    0
  );
}

console.log(maxProfit3([7, 1, 5, 3, 6, 4])); //7
console.log(maxProfit3([1, 2, 3, 4, 5])); //4
console.log(maxProfit3([7, 6, 4, 3, 1])); //0
console.log(maxProfit3([6, 1, 3, 2, 4, 7])); //7
console.log(maxProfit3([2, 1, 2, 0, 1])); //2
