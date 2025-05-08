// Given a string s, find the length of the longest substring without duplicate characters.
function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;

  let len = 1;
  if (s.length === 1) return len;

  const chars = new Set();
  chars.add(s[0]);
  let left = 0;
  let right = 1;

  while (right < s.length) {
    if (chars.has(s[right])) {
      chars.delete(s[left]);
      left++;
    } else {
      chars.add(s[right]);
      len = Math.max(len, right - left + 1);
      right++;
    }
  }
  return len;
}

["abcabcbb", "pwwkew", "aaa", ""].forEach((s) => {
  console.log(lengthOfLongestSubstring(s));
});
