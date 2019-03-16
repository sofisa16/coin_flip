"use strict";

function flip() {
  return Math.random() >= 0.5;
}

/**
 * Generates a random number greater than or equal to 0, and less than input n. [0, n)
 * input  n: must be greater than or equal to 0, and less than 1,000,000. [0, 100000)
 * output result: random number greater than or equal to 0, and less than input n. [0, n)
 */
function randomNumber(n) {
  if (n && (n < 0 || n >= 100000)) {
    throw new Error("input 'n' must be greater than or equal to 0, and less than 1,000,000.");
  }
  let binaryNumber = "";
  // m = n - 1  It is the inclusive upper limit of n.
  let m = Math.trunc(n) - 1;
  // Case when input is 0 or 1.
  if (m <= 0) {
    return 0;
  }
  let binaryNumPositionsQty = Math.floor(Math.log2(m)) + 1;
  for (let i = binaryNumPositionsQty; i > 0; i--) {
    let random = flip() ? 1 : 0;
    binaryNumber = random + binaryNumber;
  }
  let result = parseInt(binaryNumber, 2);
  return result >= n ? n - 1 : result;
}

for (let i = 0; i < 100000; i++) {
  let t = randomNumber(i);
  if (i !== 0 && t >= i) {
    console.log(new Error(`${t} >= ${i}`));
    console.log(`${i}\t${t}`);
  }
  else if(t === 0){
    console.log(`${i}\t${t}`);
  }
}