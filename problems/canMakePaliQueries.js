// const canMakePaliQueries = (string, queries) => {
//   if (string.length === 0 || queries.length === 0) {
//     return [];
//   }

//   if (string.length === 1) {
//     return Array(queries.length).fill(true);
//   }

//   const results = Array(queries.length);

//   for (let i = 0; i < queries.length; i++) {
//     const [left, right, k] = queries[i];
//     const substring = string.substring(left, right + 1);
//     if (substring.length === 1) {
//       results[i] = true;
//       continue;
//     }

//     const tracker = {};

//     for (let i = 0; i < substring.length; i++) {
//       const char = substring[i];
//       if (tracker[char] === undefined) {
//         tracker[char] = false;
//       } else {
//         tracker[char] = !tracker[char];
//       }
//     }

//     let oddCount = 0;
//     const values = Object.values(tracker);
//     for (let i = 0; i < values.length; i++) {
//       if (!values[i]) {
//         oddCount++;
//       }
//     }
    
//     if (oddCount - k * 2 <= 1) {
//       results[i] = true;
//     } else {
//       results[i] = false;
//     }
//   }

//   return results;
// };

var canMakePaliQueries = function(s, queries) {
  debugger;
  //2-d array, (s.length + 1) X 26
  //track of all letters up to this point in s     
  const dp = Array(s.length + 1).fill(0)
  
  dp[0] = Array(26).fill(0);
  const aCharCode = 'a'.charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
      const charIdx = s.charCodeAt(i) - aCharCode;
      dp[i+1] = dp[i].map((count, idx) => {
          if (idx === charIdx) {
              return count + 1;
          } else {
              return count;
          }
      });
  }

  return queries.map(([start, end, replacements]) => {
      // max possibly number of odd counts of letters is 26
      // 13 replacements can turn our total odd count to 0
      if (replacements >= 13) {
          return true;
      }
      
      //the indexing is a bit weird
      //e.g. [0 ,4] is inclusive
      const numLetters = end - start + 1
      
      //if we have an odd number of letters
      //we can let 1 of them be in the center of
      //the rearrangement
      const maxOddCount = (numLetters) % 2 === 1
        ? replacements * 2 + 1
        : replacements * 2;
      
      const oddCount = Array(26).fill(0)
          .map((_, idx) => {
              const letterCountInRange = dp[end + 1][idx] - dp[start][idx];
              return letterCountInRange % 2;
          })
          .reduce((oddCount, c) => {
              return oddCount + c;   
          }, 0);

      return oddCount <= maxOddCount;
  })
};

console.log(canMakePaliQueries('abcda', [[3,3,0],[1,2,0],[0,3,1],[0,3,2],[0,4,1]]));