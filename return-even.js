function evenOfArray(numbers) {
  let even = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      even.push(number);
    }
  }
  return even;
}
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = evenOfArray(num);
console.log(even);
