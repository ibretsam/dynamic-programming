const bestSum = (target, numbers, memo = {}) => {
  if (target === 0) return [];
  if (target < 0) return null;
  if (target in memo) return memo[target];

  let bestCombination = null;

  for (let num of numbers) {
    const remainder = target - num;
    const remainderCombination = bestSum(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (
        bestCombination === null ||
        bestCombination.length > combination.length
      ) {
        bestCombination = combination;
      }
    }
  }
  memo[target] = bestCombination;
  return bestCombination;
};

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(1000, [1, 2, 5, 25]));
