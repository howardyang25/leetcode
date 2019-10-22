const climbStairs = (n) => {
  const dp = {0: 1, 1: 1};

  const recurse = (stepsFromTop) => {
    if (dp[stepsFromTop]) {
      return dp[stepsFromTop];
    }
    
    const paths = recurse(stepsFromTop - 1) + recurse(stepsFromTop - 2);
    dp[stepsFromTop] = paths;
    return paths;
  };

  return recurse(n);
};

console.log(climbStairs(4));