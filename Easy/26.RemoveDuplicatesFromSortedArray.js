var removeDuplicates = function (nums) {
  let left = 0;
  let right = 1;
  const end = nums.length;
  while (right < end) {
    while (nums[right] <= nums[left]) right++;
    left++;
    nums[left] = nums[right];
    
  }
  return left;
};
