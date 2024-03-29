const canSum = (target, nums) => {
  let result = Array(target + 1).fill(false);
  result[0] = true;

  for (let i = 0; i < target; i++) {
    if (result[i] === true) {
      for (let num of nums) {
        result[i + num] = result[i];
      }
    }
  }

  return result[target];
};

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(30000, [7, 14, 1]));
