const coinChange = (coins, amount) => {
  const options = [];
  const recurse = (amountLeft, coinCount) => {
    if (amountLeft === 0) {
      options.push(coinCount);
      return;
    }

    if (amountLeft < 0) {
      return;
    }

    for (let i = 0; i < coins.length; i++) {
      recurse(amountLeft - coins[i], coinCount + 1);
    }
  };

  recurse(amount, 0);
  if (options.length === 0) {
    return -1;
  }

  return Math.min(...options);
};

console.log(coinChange([2], 3));
