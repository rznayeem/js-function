function oddEven(number) {
  if (number % 2 === 1) {
    console.log(number, 'number is odd');
    number *= 2;
    return number;
  } else {
    console.log(number, 'number is even');
    number /= 2;
    return number;
  }
}
const num = oddEven(4564567);
console.log(num);
