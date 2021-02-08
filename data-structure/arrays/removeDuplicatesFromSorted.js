const removeDuplicatesFromSorted = (array) => {
  let uniqueArray = new Set();
  if (array.length < 2) return array;
  uniqueArray.add(array[0]);
  for (let i = 1; i < array.length; i++) {
    if (!uniqueArray.has(array[i])) uniqueArray.add(array[i]);
  }
  return uniqueArray;
};

module.exports = removeDuplicatesFromSorted;

console.log(removeDuplicatesFromSorted([1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 8]));
