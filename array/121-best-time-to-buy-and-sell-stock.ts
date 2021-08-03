/**
 * 给定一组时间轴上的股票价格，选择购入和售出日期，使得获利最大
 * 实时更新最低价钱，如果已经得到局部最优，即将得到局部最优
 */
function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; ++i) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    let tmp = prices[i] - minPrice;
    if (tmp > profit) {
      profit = tmp;
    }
  }

  return profit;
};