const largestElementInArray = (array) => {
  let largetNo = -1;
  if (array.length < 2) return largetNo;

  for (const number of array) {
    if (number > largetNo) largetNo = number;
  }
  return largetNo;
};

module.exports = largestElementInArray;

console.log(largestElementInArray([34, 534, 1213, 21, 1, 2, 6768, 3325, 9]));
