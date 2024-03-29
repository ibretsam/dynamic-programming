const howSum = (target, nums) => {
  const table = Array(target + 1).fill(null);
  table[0] = [];

  for (let i = 0; i < target; i++) {
    if (table[i] !== null) {
      for (let num of nums) {
        table[i + num] = [...table[i], num];
      }
    }
  }

  return table[target];
};

console.log(howSum(7, [5, 3, 4]));
console.log(howSum(8, [2, 3, 5]));
