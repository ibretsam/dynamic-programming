const canSum = (target, number) => {
  if (target === 0) return true;
  if (target < 0) return false;

  for (let num of number) {
    let remainder = target - num;
    if (canSum(remainder, number) === true) {
      return true;
    }
  }

  return false;
};

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
