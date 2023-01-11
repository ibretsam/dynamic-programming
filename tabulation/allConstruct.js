const allConstruct = (target, wordbank) => {
  const table = Array(target.length + 1).fill([]);
  table[0] = [[]];

  for (let i = 0; i < target.length; i++) {
    if (table[i] !== []) {
      for (let word of wordbank) {
        if (target.slice(i).indexOf(word) === 0) {
          table[i + word.length] = [...table[i], [word]];
        }
      }
    }
  }

  return table[target.length];
};

console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
