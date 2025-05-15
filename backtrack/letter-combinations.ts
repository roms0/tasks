function letterCombinations(digits: string): string[] {
  const dict = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const letters = (digit: number): string[] => {
    if (digit < 2) return [];
    if (digit > 9) return [];
    return dict[digit].split("");
  };

  const data = digits
    .split("")
    .map(Number)
    .map(letters)
    .filter((sequence) => sequence.length > 0);
  if (!data.length) return [];
  const possibles: string[] = [];

  function track(button: number, sequence: string) {
    for (let char = 0; char < data[button].length; char++) {
      const additional = sequence + data[button][char];
      if (!data[button + 1]) {
        possibles.push(additional);
      } else {
        track(button + 1, additional);
      }
    }
  }

  track(0, "");
  return possibles;
}

letterCombinations("712");
