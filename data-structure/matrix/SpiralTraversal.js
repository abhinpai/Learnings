const SpiralTraversal = (array) => {
  let result = [];

  let rowStart = 0,
    rowEnd = array.length - 1;
  let colStart = 0,
    colEnd = array[rowStart].length - 1;

  while (result.length != array.length * array[rowStart].length) {
    for (let col = colStart; col <= colEnd; col++) {
      result.push(array[rowStart][col]);
    }

    rowStart++;

    for (let row = rowStart; row <= rowEnd; row++) {
      result.push(array[row][colEnd]);
    }

    colEnd--;

    if (rowStart <= rowEnd) {
      for (let col = colEnd; col >= colStart; col--) {
        result.push(array[rowEnd][col]);
      }
      rowEnd--;
    }

    if (colStart <= colEnd) {
      for (let row = rowEnd; row >= rowStart; row--) {
        result.push(array[row][colStart]);
      }
      colStart++;
    }
  }
  return result;
};

module.exports = SpiralTraversal;

console.log(
  SpiralTraversal([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);

console.log(
  SpiralTraversal([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
