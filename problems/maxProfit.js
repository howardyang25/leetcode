const maxProfit = (prices) => {
  if (prices.length === 0) {
    return 0;
  }

  let globalMin = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < globalMin) {
      globalMin = prices[i];
    }

    const profit = prices[i] - globalMin;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
};

const test = [7,1,5,3,6,4];
console.log(maxProfit(test));