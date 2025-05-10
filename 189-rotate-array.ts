/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  let steps = k;
  for (let i = 0; i < steps; i++) {
    nums.unshift(nums[nums.length - 1]);
    nums.pop();
    i + 1;
  }
}

const data = [1, 2];
rotate(data, 2);
console.log(data);
