/**
 * 二维数组中查找数字，通过比较数组右上角数字与需要查找的数字，然后缩减范围。
 * @param {*} arr 
 * @param {*} number 
 */
function TwoDimArraySearch(arr, number) {
    if (arr === null) return false;
    while(true) {
        if (arr.length === 0) return false;
        var target = arr[0][arr[0].length - 1];
        if (target === number) {
            return true;
        }
        else if (target > number) {
            arr.forEach(row => {
                row.pop();
            })
        }
        else if (target < number) {
            arr.shift();
        } 
    }
}

var arr = [[1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]];
var res = TwoDimArraySearch(arr, 99);
console.log(res);
