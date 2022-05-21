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
 * @param {Number} length
 * @returns
 */
const getUniqueNumber = (length = 5) => {
  let result = "";
  const characters = "ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  result = `${new Date().getTime()}-${result}`;
  return result;
};

console.log(add(2, 90)); // 92
console.log(substract(21, 10));
console.log(getUniqueNumber());
