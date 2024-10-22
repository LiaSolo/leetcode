

var romanToInt = function (s) {

  const dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  const numLen = s.length
  let ans = 0
  let prev = 1001
  let num;
  let temp = 0;
  for (let i = 0; i < numLen; i++) {
    num = dict[s[i]]
    if (num <= prev) {
      ans += temp
      temp = num
    }
    else {
      temp = -temp
      temp += num;

    }
    prev = num
  }
  ans += temp
  return ans
};

