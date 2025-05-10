function majorityElement(nums: number[]): number {
  let candidate;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

majorityElement([2, 2, 1, 1, 1, 2, 2]);
majorityElement([10, 9, 9, 9, 10]);
