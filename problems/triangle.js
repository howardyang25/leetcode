const minimumTotal = (triangle) => {
  let prevMins = [triangle[0][0]];
  for (let i = 1; i < triangle.length; i++) {
    const curMins = [];
    for (let j = 0; j < triangle[i].length; j++) {
      curMins.push(triangle[i][j] + Math.min(prevMins[j - 1] !== undefined ? prevMins[j - 1] : Infinity, prevMins[j] !== undefined ? prevMins[j] : Infinity));
    }
    prevMins = curMins;
  }

  return Math.min(...prevMins);
};

const triangle = [
  [2],
 [3,4],
[6,5,7],
[4,1,8,3]
];

console.log(minimumTotal(triangle));