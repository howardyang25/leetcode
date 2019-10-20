const findMin = (nums) => {
  // if there is no pivot, the minimum number is the first element
  if (nums.length === 1) {
    return nums[0];
  }

  if (nums[0] < nums[nums.length - 1]) {
    return nums[0];
  }

  let start = 0;
  let end = nums.length - 1;
  let pivot = Math.floor((start + end) / 2);
  while (start <= end) {
    if ((nums[pivot - 1] < nums[pivot] || nums[pivot - 1] === undefined) && nums[pivot] > nums[pivot + 1]) {
      return nums[pivot + 1];
    }

    if (nums[pivot] > nums[start] && nums[pivot] > nums[end]) {
      start = pivot + 1;
    } else {
      end = pivot - 1;
    }

    pivot = Math.floor((start + end) / 2);
  }
};

console.log(findMin([4,5,1,2,3]));