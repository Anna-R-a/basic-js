const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {

  let newArr =[] ;
  for (i = 1; i < matrix.length; i++){
    for (j = 0; j < matrix[i].length; j++){
      if (matrix[i-1][j] !== 0) {
        newArr.push(matrix[i][j]);
      }
    }
  }
  return newArr.reduce((acc, val) =>acc +val, matrix[0].reduce((acc, val) =>acc +val,0))
}
module.exports = {
  getMatrixElementsSum
};
