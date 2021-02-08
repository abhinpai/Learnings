const leftRotationByone = (array) => {
  if (array.length < 2) return array;
  let firstItem = array[0];

  for (let i = 1; i <= array.length; i++) {
    if (i === array.length) {
      array[i - 1] = firstItem;
      return array;
    }
    array[i - 1] = array[i];
  }

  return array;
};

module.export = leftRotationByone;

console.log(leftRotationByone([1, 2]));
