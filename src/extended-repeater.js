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
  let subString = '';
  let result = '';
  if (options.additionRepeatTimes) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      subString = subString + `${options.addition}${i < options.additionRepeatTimes - 1 ? options.additionSeparator || '|' : '' }`
    }
  } else {
    subString = options.addition || ''
  }
  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      result = result + `${str}${subString}${i < (!options.repeatTimes ? 1 : options.repeatTimes - 1) ? (!options.separator ? '+' : options.separator) : '' }`
    }
  } else {
    result = str + subString;
  }

  return result;

}

module.exports = {
  repeater
};
