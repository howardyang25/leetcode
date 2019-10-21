const longestValidParentheses = (str) => {
  if (str.length === 0 || str.length === 1) {
    return 0;
  }

  const stack = [];
  const tracker = {};
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(i);
      tracker[i] = false;
    }

    if (str[i] === ')') {
      const mostRecentOpening = stack.pop();
      if (mostRecentOpening === undefined) {
        tracker[i] = false;
      } else {
        tracker[mostRecentOpening] = true;
      }
    }
  }

  const values = Object.values(tracker);
  let max = 0;
  let curLength = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i]) {
      curLength += 2;
      max = Math.max(max, curLength);
    } else {
      curLength = 0;
    }
  }

  return max;
};

console.log(longestValidParentheses(")()())"));