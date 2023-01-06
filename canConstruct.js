const canConstruct = (target, wordbank, memo = {}) => {
  if (target === "") return true;
  if (target in memo) return memo[target];

  for (let word of wordbank) {
    if (target.indexOf(word) === 0) {
      const remainWord = target.replace(word, "");
      if (canConstruct(remainWord, wordbank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }

  memo[target] = false;
  return false;
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  ])
);
