const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!!(options.additionRepeatTimes in options)){
    options.additionRepeatTimes = 1
  }
  if (!!(options.repeatTimes in options)){
    options.repeatTimes = 1
  }
  if (typeof(options.addition)==='undefined'){
    options.addition = ''
  }
  if (typeof(options.separator)==='undefined'){
    options.separator = '+'
  }
  if (typeof(options.additionSeparator)==='undefined'){
    options.additionSeparator = '|'
  }
  let str1 = (String(options.addition)+String(options.additionSeparator)).repeat(options.additionRepeatTimes-1)+String(options.addition);
  let str2 = (String(str)+String(str1)+String(options.separator)).repeat(options.repeatTimes-1)+(String(str)+String(str1));
  
  return str2
}

module.exports = {
  repeater
};
