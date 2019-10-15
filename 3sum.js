const findTriplets = (arr) => {
  const triplets = [];
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    if (i === 0 || arr[i] !== arr[i - 1]) {
      let start = i + 1;
      let end = arr.length - 1;
      while (start < end) {
        if (arr[i] + arr[start] + arr[end] === 0) {
          triplets.push([arr[i], arr[start], arr[end]]);
        }

        if (arr[i] + arr[start] + arr[end] < 0 && start < end) {
          const currentStart = start;
          while (arr[start] === arr[currentStart]) {
            start++;
          }
        } else {
          const currentEnd = end;
          while (arr[end] === arr[currentEnd] && start < end) {
            end--;
          }
        }
      }
    }
  }

  return triplets;
};

const arr1 = [-1, 0, 1, 2, -1, -4];
const arr2 = [0,0,0,0];
console.log(findTriplets(arr1));