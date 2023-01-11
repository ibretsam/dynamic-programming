const countConstruct = (target, wordbank) => {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i < target.length; i++) {
    if (table[i] !== 0) {
      for (let word of wordbank) {
        if (target.slice(i).indexOf(word) === 0) {
          table[i + word.length] += table[i];
        }
      }
    }
  }

  return table[target.length];
};

// m = target.length
// n = wordbank.length
// Time: O(m^2 * n)
// Space: O(m)

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
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
