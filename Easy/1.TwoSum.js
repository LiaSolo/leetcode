var twoSum = function (nums, target) {
  let dict = {};
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (dict[target - nums[i]] !== undefined && dict[target - nums[i]] !== i) {
      return [i, dict[target - nums[i]]];
    }
    dict[nums[i]] = i;
  }
};
