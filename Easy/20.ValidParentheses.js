var isValid = function (s) {
  let stack = [];
  const len = s.length;
  const left = ["(", "[", "{"];
  const right = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < len; i++) {
    if (left.includes(s[i])) {
      stack.push(s[i]);
    } else {
      if (right[stack.pop()] !== s[i]) return false;
    }
  }
  return stack.length === 0;
};
