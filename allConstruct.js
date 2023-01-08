const allConstruct = (target, wordbank, memo = {}) => {
  if (target === "") return [[]];
  if (target in memo) return memo[target];

  let result = [];

  for (let word of wordbank) {
    if (target.indexOf(word) === 0) {
      const remainWord = target.replace(word, "");
      const remainWordWays = allConstruct(remainWord, wordbank, memo);
      const targetWays = remainWordWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }

  memo[target] = result;
  return result;
};

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));

// console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(
//   allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
// );
// console.log(
//   allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
// );
// console.log(
//   allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
//     "e",
//     "ee",
//     "eee",
//     "eeee",
//     "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
//   ])
// );
