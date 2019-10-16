const productExceptSelf = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      result[i] = 1;
    } else {
      result[i] = arr[i - 1] * result[i - 1];
    }
  }

  let rightProduct = 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] = result[i] * rightProduct;
    rightProduct = arr[i] * rightProduct;
  }

  return result;
};

const arr = [1,2,3,4];
console.log(productExceptSelf(arr));