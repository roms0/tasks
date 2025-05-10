function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 1) return strs[0];
  let prefix = "";
  let left = 0;
  while (true) {
    console.log(left);
    const match = strs.reduce((pre: false | string, cur) => {
      if (pre === cur[left]) {
        return cur[left];
      } else {
        return false;
      }
    }, strs[0][left]);
    if (match) {
      prefix += strs[0][left];
      left += 1;
    } else {
      break;
    }
  }
  return prefix;
}

console.log(longestCommonPrefix(["", ""]));
