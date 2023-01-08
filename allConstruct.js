const allConstruct = (target, wordbank) => {
  if (target === "") return [[]];

  let result = [];

  for (let word of wordbank) {
    if (target.indexOf(word) === 0) {
      const remainWord = target.replace(word, "");
      const remainWordWays = allConstruct(remainWord, wordbank);
      const targetWays = remainWordWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }

  return result;
};

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
console.log(
  allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  ])
);
