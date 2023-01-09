const gridTraveler = (m, n, memo = {}) => {
  const key = m + ", " + n;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return (memo[key] =
    gridTraveler(m, n - 1, memo) + gridTraveler(m - 1, n, memo));
};

console.log(gridTraveler(1, 1));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(5, 6));
console.log(gridTraveler(4, 9));
console.log(gridTraveler(18, 18));
