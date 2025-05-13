function threeSum(nums: number[]): number[][] {
  const len = nums.length;
  const res: number[][] = [];
  if (len < 3) return res;

  // Proper numeric sort
  nums.sort((a, b) => a - b);

  for (let i = 0; i < len - 2; i++) {
    // Skip duplicates and early termination
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] > 0) break; // no possible triplet

    let left = i + 1;
    let right = len - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        // Skip duplicates
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
}

threeSum([-1, 0, 1, 2, -1, -4]);
threeSum([0, 1, 1]);
threeSum([0, 0, 0]);
threeSum([0, 0, 0, 1, -1, 1, 1, 1, 1]);
