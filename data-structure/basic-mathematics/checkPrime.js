// Program to check weather the given no is prime or not

const method1 = (n) => {
  if (n == 1) return true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const method2 = (n) => {
  if (n == 1) return true;
  for (let i = 2; i * i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const method3 = (n) => {
  if (n == 1 || n === 2 || n === 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 2; i * i < n; i+=6) {
    if (n % i === 0 || n%(i+2) ===0) return false;
  }
  return true;
};

testValue = 23;
console.log('Method 1 =>', method1(testValue)); // Complexity o(n)
console.log('Method 2 =>', method2(testValue)); // Complexity o(logn)
console.log('Method 3 =>', method3(testValue)); // Complexity o(logn)
