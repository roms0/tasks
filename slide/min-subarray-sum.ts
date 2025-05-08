// Given an array of positive integers nums
// and a positive integer target, return the
// minimal length of a subarray whose sum is
// greater than or equal to target. If there
// is no such subarray, return 0 instead.
//
export function minSubArrayLen(target: number, nums: number[]): number {
  let len = nums.length + 1;
  let left = 0;
  let right = 0;
  let sum = nums[0];
  while (right < nums.length) {
    if (sum >= target) {
      len = Math.min(len, right - left + 1);
      sum -= nums[left];
      left += 1;
    } else {
      right += 1;
      sum += nums[right];
    }
  }
  return len === nums.length + 1 ? 0 : len;
}

export function lognminsubarray(target: number, nums: number[]): number {
  let start = 0;
  let end = Math.floor(nums.length / 2);
  let sum = nums.slice(start, end).reduce((sum, cur) => sum + cur, 0);
  return 0;
}

lognminsubarray(15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]);
lognminsubarray(15, [1]);
lognminsubarray(15, [1, 1, 2, 2]);
