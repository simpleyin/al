/**
 * 方法1，使用与字符串反转的字符串二者的公共最长字符串
 */


/**
 * 方法2
 * 动态规划，求出一个字符和两个字符的所有回文，然后找三字符回文，通过字符串左右两边比较。
 */

/**
 * 方法3
 * 中心点向外扩散法。O(n^2)
 */
function findLongest_dp(s) {
    let p = 0, length = s.length, current = 0, start = 0, end = 0;
    while (p < length) {
        let l1 = moveRoundCenter(s, p, p);
        let l2 = moveRoundCenter(s, p, p + 1);
        console.log(l1);
        console.log(l2);
        l1 > l2 ? current = l1 : current = l2;
        if (end - start < current) {
            start = p - (current - 1) / 2;
            end = p + current / 2;
        }
        p++;
    }
    return String.prototype.substr.call(s, start, end + 1);
}

var moveRoundCenter = function(s, l, r) {
    while (s.charAt(l) !== "" && s.charAt(r) !== "" && s.charAt(l) === s.charAt(r)) {
        l--;
        r++;
    }
    return r - l - 1; //为什么是减一, 因为while循环每次在最后都对l,r进行了操作，需要处理多减去的l和多加的r.
}


/**
 * Manacher算法，复杂度O(n)
 */
console.log(findLongest_dp("abab"));