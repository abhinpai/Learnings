// Program to print the n natural number N - 1

let naturalNo = [];
const naturlNumber = (n) => {
  if (n == 0) return n;
  naturalNo.push(n);
  naturlNumber(n - 1);
  return naturalNo.toString();
};

console.log('Natural Number => ', naturlNumber(5));

// Program to print the n natural number N - 1

let count = 0;
naturalNo = [];
const naturlNumber2 = (n) => {
  if (n == 0) return;
  naturlNumber2(n - 1);
  naturalNo.push(n);
  return naturalNo.toString();
};

console.log('Natural Number => ', naturlNumber2(5));
