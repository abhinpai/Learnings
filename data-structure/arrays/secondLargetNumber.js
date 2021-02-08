// Find the second largest array without sorting it
const secondLargetNumber = (array) => {
  if (array.length < 2) return -1;
  let firstLargestNo = array[0];
  let secondLargestNo = array[0];

  for (const number of array) {
    if (number > firstLargestNo) {
      secondLargestNo = firstLargestNo;
      firstLargestNo = number;
    }
    if (number > secondLargestNo && number !== firstLargestNo) {
      secondLargestNo = number;
    }
  }
  return secondLargestNo;
};

module.exports = secondLargetNumber;

console.log(secondLargetNumber([34, 534, 1213, 21, 1, 2, 6768, 3325, 9]));
