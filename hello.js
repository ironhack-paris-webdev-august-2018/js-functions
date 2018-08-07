// function definition
function hello (person, language) {
  switch (language) {
    case "french":
      console.log("Bonjour, " + person + " !");
      break;

    default:
      console.log("Hello, " + person + "!");
      break;
  }
}
// function PARAMETERS are the variables
// that the function receives (person, language)


// function call (aka invocation)
hello("Marie", "english");
hello("Lucas", "french");
hello("Karim", "english");
// function ARGUMENTS are the inputs you provide
// ("Marie", "Lucas", "Karim", "english", "french")


// --------------------------------------------------------

// return allows the function to share a result with the rest of the program
function doStuff (myNumber) {
  return myNumber ** 2;
}

console.log(doStuff(5));
// console.log(25);
// 25

console.log(doStuff(10));
// console.log(100);
// 100

// console.log((doStuff(7) + 1) * (8 / doStuff(2)));
var result = doStuff(8);
