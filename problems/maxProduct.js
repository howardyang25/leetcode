const maxProduct = (nums) => {
  if (nums.length === 0) {
    return [];
  }
  
  let max = nums[0];
  let maxStart = 0;
  let maxEnd = 0;
  
  for (let i = 0; i < nums.length; i++) {
    let curProduct = nums[i];
    if (curProduct > max) {
      max = curProduct;
      maxStart = i;
      maxEnd = i;
    }

    for (let j = i + 1; j < nums.length; j++) {
      curProduct *= nums[j];
      if (curProduct > max) {
        max = curProduct;
        maxStart = i;
        maxEnd = j;
      }
    }
  }

  return nums.slice(maxStart, maxEnd + 1).reduce((acc, cur) => acc * cur);
};

const maxProductOptimized = (nums) => {
  if (nums.length === 0) {
    return [];
  }
  
  let max = nums[0];
  let maxStart = 0;
  let maxEnd = 0;
  let curStart = 0;
  let curProduct = nums[0];

  const negativesToRight = Array(nums.length);
  negativesToRight[negativesToRight.length - 1] = 0;
  for (let i = negativesToRight.length - 2; i >= 0; i--) {
    if (nums[i + 1] < 0) {
      negativesToRight[i] = negativesToRight[i + 1] + 1;
    } else {
      negativesToRight[i] = negativesToRight[i + 1];
    }
  }
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
    
    if (nums[i] === 0) {
      while (curStart < i - 1) {
        curProduct /= nums[curStart];
        if (curProduct > max) {
          max = curProduct;
        }
        curStart++;
      }
    }

    if (curProduct === 0) {
      curProduct = nums[i];
      curStart = i;
    } else {
      curProduct *= nums[i];
    }

    if (curProduct > max) {
      max = curProduct;
      maxEnd = i;
      maxStart = curStart;
    }

    if (curProduct < 0 && negativesToRight[i] === 0) {
      while (curProduct < 0 && curStart < i) {
        curProduct /= nums[curStart];
        curStart++;
      }

      if (curProduct < 0) {
        curProduct = 1;
        curStart++;
      } else if (curProduct > max) {
        max = curProduct;
        maxStart = curStart;
      }
    }
  }

  return max;
};

const nums = [-3, 2, 3, 0, -1];
console.log(maxProductOptimized(nums));