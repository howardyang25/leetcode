const getRow = (k) => {
  let prevRow = [1];
  for (let i = 1; i <= k; i++) {
    const newRow = Array(i + 1);
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        newRow[j] = 1;
      } else {
        newRow[j] = prevRow[j] + prevRow[j - 1];
      }
    }
    prevRow = newRow;
  }

  return prevRow;
};

console.log(getRow(5));
