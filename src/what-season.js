const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date == null){
    return 'Unable to determine the time of year!'
  }
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length !== 0){
    throw new Error ('Invalid date!')
  }
  let date1 = new Date(date);
  let month = date1.getMonth();
  let result ='';
  (month === 11 || month < 2) ? result = 'winter':
  month > 1 && month < 5 ? result = 'spring' : 
  month > 4 && month < 8 ? result = 'summer' :
  result = 'autumn';
  return result;
}

module.exports = {
  getSeason
};
