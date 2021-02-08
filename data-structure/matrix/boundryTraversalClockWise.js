const boundryTraversal = (matrix) => {
  let result = [];

  let row = 0;
  let col = 0;

  while (col < matrix[row].length) {
    result.push(matrix[row][col]);
    col++;
  }

  col--;
  row++;

  while (row < matrix.length) {
    result.push(matrix[row][col]);
    row++;
  }

  row--;
  col--;

  while (col >= 0) {
    result.push(matrix[row][col]);
    col--;
  }

  col++;
  row--;

  while (row > 0) {
    result.push(matrix[row][col]);
    row--;
  }

  return result;
};

const method2 = (matrix) => {
  let result = [];
  if (matrix.length === 1) {
    for (let col = 0; col < matrix.length; col++) result.push(matrix[0][col]);
  } else if (matrix[0].length === 1) {
    for (let row = 0; row < matrix.length; row++) result.push(matrix[row][0]);
  } else {
    for (let col = 0; col < matrix[0].length; col++)
      result.push(matrix[0][col]);
    for (let row = 0; row < matrix.length; row++)
      result.push(matrix[row][matrix[0].length - 1]);
    for (let col = matrix[0].length - 2; col >= 0; col--)
      result.push(matrix[matrix.length - 1][col]);
    for (let row = matrix.length - 2; row > 0; row--)
      result.push(matrix[row][0]);
  }

  return result;
};

module.exports = boundryTraversal;

console.log(
  boundryTraversal([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);

console.log(
  method2([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  boundryTraversal([
    [1, 2],
    [4, 5],
    [7, 8],
  ])
);
