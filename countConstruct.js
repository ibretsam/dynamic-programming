const countConstruct = (target, wordbank) => {
  if (target === "") return 1;

  let count = 0;

  for (let word of wordbank) {
    if (target.indexOf(word) === 0) {
      const remainWord = target.replace(word, "");
      const numWaysForRest = countConstruct(remainWord, wordbank);
      count += numWaysForRest;
    }
  }

  return count;
};

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  ])
);
