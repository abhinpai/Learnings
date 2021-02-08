const threeNumberSum = (array, targetSum) => {
  let result = [];
  array = array.sort((a, b) => a - b);
  if (array.length === 0 || array.length < 3) return result;
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    let sum = 0;
    while (left < right) {
      sum = array[i] + array[left] + array[right];
      if (sum === targetSum) {
        result.push([array[i], array[left], array[right]]);
      }

      sum > targetSum ? right-- : left++;
    }
  }
  return result;
};

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
console.log(threeNumberSum([1, 2, 3], 6));
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1], 0));
