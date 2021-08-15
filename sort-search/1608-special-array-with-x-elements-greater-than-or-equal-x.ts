function specialArray(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let x = 0;
  let p = 0;
  while (p < nums.length) {
    if (x > nums.length - p) return -1;
    if (x === nums.length - p) return x;

    ++x;
    while (nums[p] < x) ++p;
  }

  return -1;
};