function rob(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  const state = new Array(nums.length).fill(0);
  state[0] = nums[0];
  let value = nums[0];
  for (let i = 1; i < state.length; i++) {
    state[i] = Math.max(nums[i] + (state[i - 2] || 0), state[i - 1]);
    value = state[i];
  }
  return value;
}

console.log(rob([3, 1, 1, 2]));
console.log(rob([1, 2]));
