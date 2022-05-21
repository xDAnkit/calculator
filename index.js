/**
 * @description Method is used to add two Numbers.
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
const add = (a, b) => {
  const result = a + b;
  return result;
};

/**
 * @description Method is used to substract two Numbers.
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
const substract = (a, b) => {
  const result = a - b;
  return result;
};

/**
 * @description Method to get unique number
 * @returns
 */
const getUniqueNumber = () => {
  const result = new Date().getTime();
  return result;
};

console.log(add(2, 90)); // 92
console.log(substract(21, 10));
console.log(getUniqueNumber());
