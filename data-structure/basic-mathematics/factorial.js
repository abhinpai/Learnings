// Program to find a factorial of given number

// Method 1
const factorialMethod1 = (n) => {
  if (n === 0 || n === 1) return 1;
  return n * factorialMethod1(n - 1);
};

// Method 1
const factorialMethod2 = (n) => {
  let factorial = 1;
  if (n === 0 || n === 1) return factorial;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial.toLocaleString();
};

console.log('Method 1 =>', factorialMethod1(7));
console.log('Method 1 =>', factorialMethod2(100));
