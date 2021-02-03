// Program to check the given no is palindrome or not

// Method 1
function checkNoIsPalindromeMethod1(n) {
  n = n.toString().split('').map(Number);
  for (let i = 0; i < n.length / 2; i++) {
    let index = n.length - i - 1;
    if (index === i) return true;
    if (n[i] !== n[index]) return false;
  }
  return true;
}

// Method 1
function checkNoIsPalindromeMethod2(n) {
  let reverseNo = '';
  let tmp = n;
  while (n !== 0) {
    reverseNo += n % 10;
    n = Math.floor(n / 10);
  }
  return tmp.toString() === reverseNo.toString() ? true : false;
}

console.log('Method 1 =>', checkNoIsPalindromeMethod1(123412321));
console.log('Method 1 =>', checkNoIsPalindromeMethod2(123321));
