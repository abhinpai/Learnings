const leftRotateByD = (array, moveBy) => {
  let length = array.length;
  if (length < 1) return array;

  let arrayChunk = array.splice(0, moveBy).slice(0, moveBy);
  for (let i = arrayChunk.length - 1; i >= 0; i--) {
    array.push(arrayChunk[i]);
    // console.log(arrayChunk[i]);
  }
  return array;
};

module.exports = leftRotateByD;

// console.log(leftRotateByD([1, 2, 3, 4, 5], 2));
console.log(leftRotateByD([1, 2, 3, 4, 5, 6, 7], 2));
