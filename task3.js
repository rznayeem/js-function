function make_avg(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum = number + sum;
  }
  const avg = sum / numbers.length;
  return avg;
}
const num = make_avg([2, 4, 6, 5, 9]);
console.log(num);
