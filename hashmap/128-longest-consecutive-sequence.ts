export function longest(nums: number[]): unknown {
  const map = new Map<number, number>();
  let max = 0;

  for (const num of nums) {
    if (map.has(num)) continue;

    const left = map.get(num - 1) ?? 0;
    const right = map.get(num + 1) ?? 0;
    const currSequence = left + right + 1;

    map.set(num, currSequence);
    // update the boundaries
    map.set(num - left, currSequence);
    map.set(num + right, currSequence);

    max = Math.max(max, currSequence);
  }

  return max;
}
