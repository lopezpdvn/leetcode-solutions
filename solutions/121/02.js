/**
 * @param {number[]} prices
 * @return {number}
 */ //////////////////////////////////////////////////
const maxProfit = prices => {
  let minPrice  = Number.MAX_VALUE,
      maxProfit = Number();

  for(const todayPrice of prices) {

    if(todayPrice < minPrice) {
      minPrice = todayPrice;
      continue;
    }

    const todayProfit = todayPrice - minPrice;
    if(todayProfit > maxProfit)
      maxProfit = todayProfit;
  }

  return maxProfit;
};
