const stockBuyAndSell = (array) => {
  let profit = 0;
  if (array.length == 0) return profit;
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] < array[i]) profit += array[i] - array[i - 1];
  }
  return profit;
};

console.log(stockBuyAndSell([1, 5, 3, 8, 12]));
console.log(stockBuyAndSell([30, 20, 10]));
console.log(stockBuyAndSell([1, 5, 3, 1, 2, 8]));
