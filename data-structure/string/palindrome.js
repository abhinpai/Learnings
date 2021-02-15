// Using while loop
// Using the built in fuction reverse the string and compare both of them

const palindrome = (str) => {
  str = str.toLowerCase();
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }
  return true;
};

module.export = palindrome;

console.log(palindrome('ABCBA'));
