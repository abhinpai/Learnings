// Program to count a number of digit from a given input

// Method 1
function countDigitMethod1(n) {
  if (typeof n != 'number') {
    return -1;
  }
  return Math.floor(Math.log10(n) + 1);
}

// Method 2
function countDigitMethod2(n) {
  if (n === 0) {
    return 0;
  }
  return 1 + countDigitMethod2(Math.floor(n / 10));
}

console.log('Method 1 =>', countDigitMethod1(95647)); // Complexity o(1) Since the operation is not tends to the input
console.log('Method 2 =>', countDigitMethod2(95647)); // Cimplexity o(logn) since the operation is varry depends upon the input
