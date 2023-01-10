const canConstruct = (target, wordbank) => {
  const table = Array(target.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i < target.length; i++) {
    if (table[i] === true) {
      for (let word of wordbank) {
        if (target.replace(word, "").indexOf(word) === 0) {
          table[i + word.length] = true;
        }
      }
    }
  }

  return table[target.length];
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
