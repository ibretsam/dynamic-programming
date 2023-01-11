const allConstruct = (target, wordbank) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);

  table[0] = [[]];

  for (let i = 0; i < target.length; i++) {
    if (table[i] !== []) {
      for (let word of wordbank) {
        if (target.slice(i).indexOf(word) === 0) {
          const temp = table[i].map((subArr) => [...subArr, word]);
          table[i + word.length].push(...temp);
        }
      }
    }
  }

  return table[target.length];
};

// m = target.length
// n = wordbank.length

// Time: O(n^m)
// Space: O(m^m)

console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));

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
