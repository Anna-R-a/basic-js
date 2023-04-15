const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
  if (arr[i]=== '--discard-next'){
    i++
  }
  if (arr[i+1]=== '--discard-prev'){
    i = i+2
  }
  if (arr[i]=== '--double-next'){
    newArr.push(arr[i+1])
  }
  if (arr[i]=== '--double-prev'){
    newArr.push(arr[i+1])
  }
  if (arr[0]==='--discard-prev' || arr[0]==='--double-prev'){
  }
  else{
    newArr.push(arr[i])
  }
}
console.log(newArr)
  return newArr
}

module.exports = {
  transform
};
