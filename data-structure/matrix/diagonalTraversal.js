const diagonalTraversal = (matrix) => {
  let result = [];

  let matrixMap = new Map();

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (!matrixMap.has(row + col)) {
        matrixMap.set(row + col, matrix[row][col]);
      } else {
        matrixMap.set(row + col, [
          ...matrixMap.get(row + col),
          matrix[row][col],
        ]);
      }
    }
  }

  let moveDown = true;

  matrixMap.forEach((element) => {
    if (moveDown) {
      result.push(element);
    } else {
      result.push(...element.reverse());
    }
    moveDown = !moveDown;
  });

  return result;
};

const method2 = (matrix) => {
  let row = 0,
    col = 0;

  let result = [];

  while (result.length != matrix.length * matrix[0].length) {
    if (row === col) {
      result.push(matrix[row][col]);
    }

    // col++;
    if(col !== matrix[0].length -1) {
        col++;
    }
    if (col > 0 && row === 0) {
      while (col >= 0) {
        result.push(matrix[row][col]);
        col--;
        row++;
      }
      col++;
    }

    if (row > 0 && col === 0) {
      while (row >= 0) {
        result.push(matrix[row][col]);
        row--;
        col++;
      }
      row++;
    }
  }

  return result;
};

module.exports = diagonalTraversal;

console.log(
    method2([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);

// console.log(
//   diagonalTraversal([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
