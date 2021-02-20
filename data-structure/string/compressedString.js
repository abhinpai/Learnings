const compressedString = (string) => {
  let result = [];
  let counter = 1;

  let index = 1;

  while (index < string.length) {
    if (string[index - 1] === string[index]) {
      if (counter === 10) {
        result.push(`${counter}${string[index - 1]}`);
        counter = 0;
      }
      counter++;
    } else {
      result.push(`${counter}${string[index - 1]}`);
      counter = 1;
    }

    index++;
  }
  result.push(`${counter}${string[index - 1]}`);
  return result;
};

console.log(compressedString('AAAAAAAAAAAABBBB'));
