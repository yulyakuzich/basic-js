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
function getDNSStats(domains) {
  let counts = {};

  for (let domain of domains) {
    let levels = domain.split('.').reverse();
    let currentDomain = '';

    for (let level of levels) {
      currentDomain += '.' + level;

      if (counts[currentDomain]) {
        counts[currentDomain]++;
      } else {
        counts[currentDomain] = 1;
      }
    }
  }

  return counts;
}

module.exports = {
  getDNSStats
};
