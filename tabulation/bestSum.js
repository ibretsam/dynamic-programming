const bestSum = (target, nums) => {
  const table = Array(target + 1).fill(null);
  table[0] = [];

  for (let i = 0; i < target; i++) {
    if (table[i] !== null) {
      for (let num of nums) {
        if (!table[i + num] || table[i + num].length > table[i].length + 1) {
          table[i + num] = [...table[i], num];
        }
      }
    }
  }

  return table[target];
};

console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));
console.log(bestSum(100, [25, 1, 2, 5]));
