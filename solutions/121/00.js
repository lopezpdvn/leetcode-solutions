/**
 * @param {number[]} prices
 * @return {number}
 */
//////////////////////////////////////////////////
const maxProfit = prices => {
  let maxProfit = null;
  for(const [iBuy, buyPrc] of prices.entries()) {
    for(let iSell = iBuy+1;
                iSell < prices.length; iSell++) {
      const profit = prices[iSell] - buyPrc;
      if(profit > maxProfit)
        maxProfit = profit;
    }
  }
  return maxProfit;
};
