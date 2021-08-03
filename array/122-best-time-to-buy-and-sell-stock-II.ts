/**
 * 给定时间上的股票价格，交易次数不限，求最大获利
 * 将所有递增差值相加
 */
function maxProfit(prices: number[]): number {
  let profit = 0;

  for (let i = 1; i < prices.length; ++i) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }

  return profit;
};