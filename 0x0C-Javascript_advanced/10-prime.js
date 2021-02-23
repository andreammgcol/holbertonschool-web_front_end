function countPrimeNumbers() {
  const primeNum = new Array(100).fill(true);
  let count = 0;
  for (let i = 2; i < 100; i++) {
    if (primeNum[i] === true) {
      count++;
      for (let j = 2; i * j < 100; j++) {
        primeNum[i * j] = false;
      }
    }
  }
  return count;
}

let time0 = performance.now();
for (let i = 0; i < 100; i++) {
  console.log(countPrimeNumbers());
}
let time1 = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${time1 - time0} milliseconds.`);
