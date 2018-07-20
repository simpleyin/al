/**
 * 题目：一副牌大小从1到n, 每次从牌堆顶部取一张牌放到桌上，再取一张放到牌堆的堆底，直到取完，最后桌上的牌堆顺序为1-n，问初始的牌堆顺序
 */ 

/**
 * 方法一， 逆向求解
 * @param {*} n 
 */
function revert(n) {
    let arr = new Array(5).fill(0).map((_, i) => i + 1);
    let res = [];
    while (arr.length > 0) {
        var pop = res.pop();
        if (pop) res.unshift(pop);
        res.unshift(arr.shift());
    }
    return res;
}

/**
 * 方法二
 * 数组置换方法,直接把一副1..n的牌那样玩一遍，他的结果就是索引值，然后把桌子上的牌堆按照索引值排个序（这里是O(n)），就得到原来的结果了。
 * @param {}} n 
 */
function trick(n) {
    
}
