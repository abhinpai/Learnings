function reverseWordsInString(string) {
  let stringArray = [];
  let startIndex = 0;
  let endIndex = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      stringArray.unshift(string.substring(startIndex, endIndex));
      stringArray.unshift(' ');
      startIndex = endIndex +1;
    }
    endIndex++;
  }
  stringArray.unshift(string.substring(startIndex, endIndex));
  return stringArray.join(' ');
}

// Do not edit the line below.
exports.reverseWordsInString = reverseWordsInString;


console.log(reverseWordsInString("AlgoExpert is the best!"));