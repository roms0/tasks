function groupAnagrams(strs: string[]): string[][] {
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split("").sort().join("");

    if (!map.has(sortedStr)) {
      map.set(sortedStr, [strs[i]]);
    } else {
      const prevArr = map.get(sortedStr);
      prevArr.push(strs[i]);
      map.set(sortedStr, prevArr);
    }
  }

  return Array.from(map.values());
}
