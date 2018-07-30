/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * 
 */
var convert = function(s, numRows) {
    let matrix = Array.from({length: numRows}, (v, k) => []);
    Array.from(s).forEach((v, i) => {        
        let m = Math.floor(i / numRows);
        let row = i % numRows < 4 ;
        let column_start = m > 0 ? m * numRows - m : 0;

        matrix[row][column_start + row] = v;
    })
    console.log(matrix);

    return matrix.reduce((p, c) => p.concat(c.filter(v => v.length > 0)), []).join("");
};

console.log(convert("PAYPALISHIRING", 4));
