const getClosestSum = (arr1, arr2, target) => {
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
  let bestPair = [];
  let index1 = arr1.length - 1;
  let index2 = 0;
  let minDifference = Infinity;
  while (index1 >= 0 && index2 < arr2.length) {
    const difference = arr1[index1] + arr2[index2] - target;
    if (difference === 0) {
      return [arr1[index1], arr2[index2]];
    }

    if (Math.abs(difference) < minDifference) {
      minDifference = Math.abs(difference);
      bestPair = [arr1[index1], arr2[index2]];
    }

    if (arr1[index1] + arr2[index2] < target) {
      index2++;
    } else {
      index1--;
    }
  }
  return bestPair;
};

const arr1 = [-1, 3, 8, 2, 9, 5];
const arr2 = [4, 1, 2, 10, 5, 20];
console.log(getClosestSum(arr1, arr2, 24));