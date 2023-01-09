const canSum = (target, number, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;

  for (let num of number) {
    const remainder = target - num;
    if (canSum(remainder, number, memo) === true) {
      memo[target] = true;
      return true;
    }
  }

  memo[target] = false;
  return false;
};

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(30000, [7, 14, 1]));
