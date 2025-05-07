// TIME     logN
// MEMORY   1
function findPeakElement(nums: number[]): number {
  if (nums.length === 1) return 0;
  if (nums.length === 0) return -1;
  let start = 0;
  let finish = nums.length - 1;
  let answer = -1;

  function valid(i: number) {
    const is =
      (i - 1 > 0 ? nums[i - 1] : nums[i] - 1) < nums[i] &&
      (i + 1 < nums.length ? nums[i + 1] : nums[i] - 1) < nums[i];
    return is;
  }

  function getCenter(s: number, f: number) {
    return Math.floor(s + (f - s) / 2);
  }

  while (start < finish) {
    const center = getCenter(start, finish);

    if (valid(start)) {
      answer = start;
      break;
    }
    if (valid(finish)) {
      answer = finish;
      break;
    }
    if (valid(center)) {
      answer = center;
      break;
    }

    if (nums[center + 1] > nums[center]) {
      start = center + 1;
    } else {
      finish = center - 1;
    }
  }
  return answer;
}
