const howSum = (target, number, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of number) {
    const remainder = target - num;
    const remainderResult = howSum(remainder, number, memo);
    if (remainderResult !== null) {
      memo[target] = [...remainderResult, num];
      return memo[target];
    }
  }

  memo[target] = null;
  return null;
};

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));

// m = target
// n = number.length

// Brute Force:
// time: O(n ^ m * m)
// space: O(m)

// Memoized:
// time: O(n * m ^ 2)
// space: O(m)
