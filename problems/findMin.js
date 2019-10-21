const findMin = (nums) => {
  if (nums.length === 1) {
    return nums[0];
  }

  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    if (nums[start] <= nums[end]) {
      return nums[start];
    }

    let mid = Math.floor((start + end) / 2);
    if (nums[mid] >= nums[start]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
};

console.log(findMin([2,1]));