const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats( matrix ) {
  let str = matrix.join();
  let count = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] + str[i+1] ==='^^' && str[i-1] !== ' ' && str[i+2] !== ' '){
      count++;
      i++;
    }
  }
  return count
}

module.exports = {
  countCats
};
