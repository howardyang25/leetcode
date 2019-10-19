const lengthOfLongestSubstring = (str) => {
  if (str.length === 0) {
    return 0;
  }

  let max = 1;
  let start = 0;
  let curLength = 1;

  const tracker = {};
  tracker[str[0]] = 0;

  for (let i = 1; i < str.length; i++) {
    if (tracker[str[i]] >= start) {
      start = tracker[str[i]] + 1;
      curLength = i - start + 1;
    } else {
      curLength++;
    }
    
    tracker[str[i]] = i;
    max = Math.max(max, curLength);
  }

  return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
