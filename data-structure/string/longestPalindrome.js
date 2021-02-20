const longestPalindrome = (string) => {

    let result = [];

    for(let i =0; i < string.length -1; i++) {
        for(let j = i+1; j< string.length; j++) {
            if(string[i] === string[j]) {
                result.push(string.substring(i,j+1));
            }
        }
    }

    let length = -1;
    let largestPalindromeIndex = null;

    result.map((item, index) => {
        if(isPalindrome(item) && item.length >= length) {
            length = item.length;
            largestPalindromeIndex = index
        }
    })

    return result[largestPalindromeIndex];
};

const isPalindrome = (string) => {
  let i = 0;
  let j = string.length - 1;

  while (i < j) {
    if (string[i] !== string[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

console.log(longestPalindrome("abcdefghfedcbaa"))
