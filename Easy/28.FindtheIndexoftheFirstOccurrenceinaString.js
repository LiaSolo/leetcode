var strStr = function (haystack, needle) {
  const lenHay = haystack.length;
  const lenNee = needle.length;
  let j = 0;
  let i = 0;
  let startCheck = 0;
  while (i < lenHay) {
    //console.log(i, haystack[i], j, needle[j]);

    if (haystack[i] === needle[j]) {
      if (j === 0) startCheck = i;
      j++;
      if (j === lenNee) return i - j + 1;
    } else if (j > 0) {
      j = 0;
      i = startCheck;
    }

    i++;
  }

  return -1;
};

console.log(strStr("mississippi", "issip"));
