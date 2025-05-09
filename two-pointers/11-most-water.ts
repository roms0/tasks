// 1 < n
function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let volume = 0;
  while (left < right) {
    const candidate = (right - left) * Math.min(height[left], height[right]);
    volume = Math.max(volume, candidate);
    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return volume;
}

[
  [1, 8, 6, 2, 5, 4, 8, 3, 7],
  [1, 1],
].forEach((h) => {
  console.log(maxArea(h));
});
