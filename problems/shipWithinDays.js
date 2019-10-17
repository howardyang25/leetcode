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

const weights = [1,2,3,4,5,6,7,8,9,10];
console.log(shipWithinDays(weights, 5));