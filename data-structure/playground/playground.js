// array = [1,2,1,2,-4,3,5,8] k = 4
// Sorted Array = [-4,1,1,2,2,3,5,8]

function kSubArray(array, k) {
  let length = array.length;
  let result = [];
  let sum = null;
  let subArray = [];

  array = array.sort((a, b) => a - b);
  if (length < 2) return [];

  for (let i = 0; i < length; i++) {
    sum = null;
    subArray = [];

    for (let j = 0; j < length; j++) {
      sum = sum + array[j];
      subArray.push(array[j]);

      if (sum === k) {
        result.push(subArray);
        sum = null;
        subArray = [];
      }
      if(sum > k) {
        sum = null;
        subArray = [];
      }
    }
  }
  return array;
}

// Do not edit the line below.
exports.kSubArray = kSubArray;

console.log(kSubArray([1, 2, 1, 2, -4, 3, 5, 8], 4));

// [[1,1], [-4, 5], [1,1,2], [1,2,3]]
