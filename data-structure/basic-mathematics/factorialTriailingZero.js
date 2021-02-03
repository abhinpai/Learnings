// Program to find Trailing Zeros in Factorial

// Method 1: This solution may lead to overflow exception as input grows
const method1 = (n) => {
  let factorial = 1;
  let zeros = 0;
  if (n === 0 || n === 1) return zeros;

  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  while (factorial % 10 === 0) {
    zeros++;
    factorial /= 10;
  }
  return zeros;
};

// Method 1: This solution may lead to overflow exception as input grows
const method2 = (n) => {
  let zeros = 0;
  if (n === 0 || n === 1) return zeros;

  for (let i = 5; i <= n; i *= 5) {
    zeros += Math.floor(n / i);
  }

  return zeros;
};

console.log('Method 1 =>', method1(100)); // Complexity o(n)
console.log('Method 2 =>', method2(100)); // Complexity o(logn)
