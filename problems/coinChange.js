const coinChange = (coins, amount) => {
  const dp = {
    0: 0,
  };

  const recurse = (amountLeft) => {
    if (dp[amountLeft] !== undefined) {
      return dp[amountLeft];
    }

    if (amountLeft < 0) {
      return NaN;
    }
    
    const options = [];
    for (let i = 0; i < coins.length; i++) {
      const coinCount = 1 + recurse(amountLeft - coins[i]);
      if (!Number.isNaN(coinCount)) {
        options.push(coinCount);
      }
    }
    
    if (options.length === 0) {
      dp[amountLeft] = NaN;
      return NaN;
    }

    const minCoins = Math.min(...options);
    dp[amountLeft] = minCoins;
    return minCoins;
  };
  
  const solution = recurse(amount);
  if (Number.isNaN(solution)) {
    return -1;
  }

  return recurse(amount);
};

console.log(coinChange([186,419,83,408], 6249));
