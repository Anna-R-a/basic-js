const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
    let newStr = '';
    let domainArr1 = [];
  for(let i = 0; i < domains.length; i++){
    let domainArr = domains[i].split('.').reverse().join('.');
    newStr = '.'+domainArr;
    for(j = newStr.length; j > 0 ; j--){
      if (j === newStr.length){
        domainArr1.push(newStr)
      } else if (newStr[j] === '.'){
        domainArr1.push(newStr.slice(0,-newStr.length+j))
      }
    }
  }
  const obj = domainArr1.reduce((acc, el) => (acc[el] = (acc[el] || 0) + 1, acc), {})
  
  return obj
}

module.exports = {
  getDNSStats
};
