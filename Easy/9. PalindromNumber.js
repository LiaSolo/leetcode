var isPalindrome = function (num) {
  let x = num;
  let y = 0;
  while (x > 0) {
    y *= 10;
    y += x % 10;
    x = Math.floor(x / 10);
  }
  return num === y;
};
