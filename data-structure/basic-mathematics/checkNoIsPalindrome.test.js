const noIsPalindrome = require('./checkNoIsPalindrome');

test('Check the given inputs are palindrome or not', () => {
  expect(noIsPalindrome.method1(12344321)).toBeTruthy();
  expect(noIsPalindrome.method1(123414321)).toBeTruthy();
  expect(noIsPalindrome.method1(1)).toBeTruthy();
  expect(noIsPalindrome.method1(1234124321)).toBeFalsy();
});
