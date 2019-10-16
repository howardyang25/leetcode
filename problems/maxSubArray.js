const maxSubArray = (arr) => {
  let maxSum = arr[0];
  let curSum = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    const newSum = curSum + arr[i];
    if (newSum < arr[i]) {
      curSum = arr[i];
    } else {
      curSum = newSum;
    }

    if (curSum > maxSum) {
      maxSum = curSum;
    }
  }

  return maxSum;
};

const arr = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(arr));
