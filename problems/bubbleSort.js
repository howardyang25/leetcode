const bubbleSort = (arr) => {
  let isSorted = false;
  let stopIndex = arr.length - 1;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < stopIndex; i++) {
      if (arr[i] > arr[i + 1]) {
        isSorted = false;
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    
    stopIndex--;
  }

  return arr;
};

const arr = [5, 2, 7, 6, 4, 1, 3, 9, 8];
console.log(bubbleSort(arr));