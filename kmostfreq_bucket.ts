function topKFrequent(nums: number[], k: number): number[] {
  const freqmap = new Map();

  for (const num of nums) {
    freqmap.set(num, (freqmap.get(num) || 0) + 1);
  }

  const bucket: number[][] = Array(nums.length + 1)
    .fill(undefined)
    .map(() => []);

  for (const [num, freq] of freqmap.entries()) {
    bucket[freq]?.push(num);
  }
  const res: number[] = [];
  for (let i = bucket.length - 1; i >= 0; i--) {
    for (const num of bucket[i]!) {
      res.push(num);
      if (res.length === k) return res;
    }
  }
  return res;
}
