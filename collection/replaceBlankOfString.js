/**
 * 题目：请实现一个函数，能够将字符串中的空格替换为"%20",如："we are happy"， 替换为"we%20are%20happy"
 * 思路：首先求出替换后字符串的长度，使用俩个指针指向原字符串末尾，和现字符串末尾。
 * 向前移动指针，遇到空格后面的指针向字符串中插入相应的替换字符，遇到非空格则将字符复制到后一个指针指向的位置.
 * 
 * 注意：对字符串使用下标的方法操作只能get, 不能set.
 */

function replace(str) {
    let p1 = str.length - 1, p2, blankSum = 0;

    for (let i = 0, l = str.length; i < l; i++) {
        if (String.prototype.charAt.call(str, i) === " ") blankSum++;
    }
    for (let j = 0, l = blankSum * 2; j < l; j++) {
        str += "#";
    }
    p2 = str.length - 1;
    str = str.split("");

    for (; p1 !== p2 && p1 >= 0; p1--) {
        if (str[p1] === " ") {
            str[p2--] = "0";
            str[p2--] = "2";
            str[p2--] = "%";
        } else {
            str[p2--] = str[p1];
        }
    }
    
    return Array.prototype.join.call(str, "");
}

console.log(replace(" we are very very happy "));
