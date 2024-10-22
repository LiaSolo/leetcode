

var longestCommonPrefix = function(strs) {
    let first = strs[0];
    let last = strs[0];

    for (let i = 1; i < strs.length; i ++) {
        first = first < strs[i] ? first : strs[i]
        last = last > strs[i] ? last : strs[i];
    }

    const minLen = Math.min(first.length, last.length)

    let ans = ''
    let i = 0;
    while (i < minLen && first[i] === last[i]) {
        ans += first[i]
        i ++
    }

    return ans
};