const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let num = n.toString();
for(let i = 0; i < num.length; i++){
if(num[i]<num[i+1]){
  num = num.slice(0,i) + num.slice(i+1)
  break
  } 
}
if (num === n.toString()){
  num = num.slice(0, -1)
}
  return Number(num)
}

module.exports = {
  deleteDigit
};
