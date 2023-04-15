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
  else if (arr[i+1]=== '--discard-prev'){
    i = i++;
  }
  else if (i === 0 && arr[i]==='--discard-prev'){
    newArr.push(arr[1])
      i++;
  }
  else if (i === 0 && arr[i] === '--double-prev'){
    newArr.push(arr[1])
    i++;
  }
  else if (i===arr.length-1 && arr[i]=== '--double-next'){
    i++;
  }
  else if (arr[i]=== '--double-next'){
    newArr.push(arr[i+1])
  }
  else if (arr[i]=== '--double-prev' && i !== 0){
    newArr.push(arr[i-1])
  }
  else if (arr[i+1]=== '--discard-next' && arr[i+3]=== '--double-prev'){
    newArr.push(arr[i])
    i = i+3;
  }
  else if (arr[i+1]=== '--discard-next' && arr[i+3]=== '--discard-prev'){
    newArr.push(arr[i])
    i = i+3;
  }
  else if (arr[i+1]=== '--double-next' && arr[i+3]=== '--discard-prev'){
    newArr.push(arr[i],arr[i+2])
    i = i+3;
  }
  else{
    newArr.push(arr[i])
  }
}
console.log(arr, newArr)
  return newArr
}

module.exports = {
  transform
};
