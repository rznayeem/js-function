const x = '001110010';
let y = '';
for (const a of x) {
  let b = a;
  if (b === '0') {
    y += b;
  }
}
console.log(y.length);
