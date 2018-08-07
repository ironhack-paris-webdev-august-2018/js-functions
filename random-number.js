// Math.random() returns a random decimal number
// (0 - 0.99999999999999999999999999999999)

// randum number between 0 and max-1
function randomNumber (max) {
  return Math.floor(Math.random() * max);
}

// Random number (0-5)
console.log(randomNumber(6));

// Random number (0-19)
console.log(randomNumber(20));

function coinFlip () {
  if (randomNumber(2) === 1) {
    return "face";
  }
  else {
    return "pile";
  }
}

console.log(coinFlip());
console.log(coinFlip());
console.log(coinFlip());
