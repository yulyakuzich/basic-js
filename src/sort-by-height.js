const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const filtredArr = arr.filter(el => el !== -1)
  console.log(filtredArr);
  const sortFiltredArr = filtredArr.sort(function(a, b){return a-b});
  console.log(sortFiltredArr);
  let result = [];
  let sortFiltredArrIdx = 0
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] == -1) {
      result.push(-1)
    } else {
      result.push(sortFiltredArr[sortFiltredArrIdx])
      sortFiltredArrIdx++
    }
  }
  return result
}

module.exports = {
  sortByHeight
};
