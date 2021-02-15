// Program to reverse the array witout using additional array

const reverseAnArray = (array) => {
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    if (i !== j) {
      let tmp = array[i];
      array[i] = array[j];
      array[j] = tmp;
    }
    i++;
    j--;
  }

 
  return  array.substring(0, 
    ans.length() - 1);
};

console.log(reverseAnArray([1, 2, 3, 4, 5, 6]));
console.log(reverseAnArray([1, 2, 3, 4, 5, 6, 7]));
