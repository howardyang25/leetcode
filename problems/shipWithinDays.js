const shipWithinDays = (weights, D) => {
  const maxWeight = Math.max(...weights);
  const totalWeight = weights.reduce((acc, cur) => acc + cur);
  let day = 1;
  let curWeight = 0;
  for (let i = maxWeight; i <= totalWeight; i++) {
    for (let j = 0; j < weights.length; j++) {
      curWeight += weights[j];
      if (curWeight > i) {
        day++;
        curWeight = weights[j];
      }
    }
    
    if (day <= D) {
      return i;
    }

    day = 1;
    curWeight = 0;
  }
}

const shipWithinDaysOptimized = (weights, D) => {
  let left = 0;
  let right = 0;
  for (let i = 0; i < weights.length; i++) {
    left = Math.max(left, weights[i]);
    right += weights[i];
  }

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let need = 1;
    let cur = 0;
    for (let i = 0; i < weights.length; i++) {
      if (cur + weights[i] > mid) {
        need += 1;
        cur = 0;
      }

      cur += weights[i];
    }

    if (need > D) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

const weights = [1,2,3,4,5,6,7,8,9,10];
console.log(shipWithinDaysOptimized(weights, 5));