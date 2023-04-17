const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const emailArr = email.split('');
  const indexA = emailArr.lastIndexOf('@');
  domain = emailArr.slice(indexA + 1, emailArr.length).join('');
  return domain;
}

module.exports = {
  getEmailDomain
};
