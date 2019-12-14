/**
 * @param {number[]} prices
 * @return {number}
 */
//////////////////////////////////////////////////
const maxProfit = prices => {
  const n = prices.length;
  let maxProfit = Number();
  for(let i = 0; i < n; i++) {
    for(let j = i + 1; j < n; j++) {
      const profit = prices[j] - prices[i];
      if(profit > maxProfit)
        maxProfit = profit;
    }
  }
  return maxProfit;
};
