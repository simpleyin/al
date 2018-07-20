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
    let p = 0, length = s.length, maxStr = s.charAt(0);
    while (p < length) {
            for (let i = 1, left, right,leftIndex, rightIndex; i > 0; i++) {
                if (p + ".0" == p) {
                    left = s.charAt(p - i);
                    right = s.charAt(p + i);
                    leftIndex = p - i;
                    rightIndex = p + i;
                } else {
                    left = s.charAt(p - (i - 1) - 0.5);
                    right = s.charAt(p + (i - 1) + 0.5);
                    leftIndex = p - (i - 1) - 0.5;
                    rightIndex = p + (i - 1) + 0.5;
                }
                
                if ( left.length > 0 && right.length > 0) {
                    if (left === right) {
                        current = String.prototype.substr.call(s, leftIndex, rightIndex - leftIndex + 1);
                        maxStr = maxStr.length > current.length ? maxStr : current;
                    } else {
                        break;
                    }
                } else {
                    break;
                }
            }
        p = p + 0.5;
    }
    return maxStr;
}

/**
 * Manacher算法，复杂度O(n)
 */

console.log(findLongest_dp("asdfasdfaslkdfj;aslkbabdfja;lskjfl;sjiweojfowijf;lsadkjfl;bb"));