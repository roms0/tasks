function maxSubArray(nums: number[]): number {
  if (nums.length < 2) return nums[0];
  let sum = nums[0];
  let maxsum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    maxsum = Math.max(maxsum, sum);
  }
  return maxsum;
}
