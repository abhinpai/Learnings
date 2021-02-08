const checkTheArrayIsSortedOrNot = (array) => {
  let length = array.length;
  if (length < 2) return true;

  for (let i = 1; i < length; i++) {
    if (array[i - 1] > array[i]) {
      return false;
    }
  }
  return true;
};

module.export = checkTheArrayIsSortedOrNot;

console.log(
  checkTheArrayIsSortedOrNot([34, 534, 1213, 2122, 4122, 76882, 96768, 993325, 7899769])
);
