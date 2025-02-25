var removeElement = function (nums, val) {
  const len = nums.length;
  let right = len - 1;

  for (let left = 0; left < len; left++) {
    if (nums[left] !== val) {
      continue;
    }
    while (nums[right] === val) right--;
    if (right < left) {
      return left;
    }
    nums[left] = nums[right];
    nums[right] = val;
  }
  return len
};
