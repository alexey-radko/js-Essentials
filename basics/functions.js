// Closures
// it's a function in wich there is an another function - closures,
// the closures are aware of the environment
// its useful for storing the environment

function generator(input) {
  // its a closure function
  return function () {
    return input * 2;
  };
}

let calc = generator(20);

console.log(calc());

function urlGenerator(domain) {
  return function (url) {
    return `https://www.${url}.${domain}`;
  };
}

let comUrl = urlGenerator('com');
console.log(comUrl('google'));

// ______________________ 2 ___________________________
// Imediatlly invoked function Execution IIFES

// in that case the global scope can't be polluted, cause the variables are not accessable in local scope
// will be used in case when it' needed to have a part with variables that not can be used globaly

(function calc() {
  let number = 10;
  console.log(number);
})();

// won't work, cause the variable number it's not readable
// console.log(number);

// _____________________  3  ____________________________

// Build in Methods in functions & properties
function message() {
  //   console.log(msg);
  // with key arguments its possible to get parameters
  console.log(...arguments); // will show just the values
  console.log(arguments);
  console.log('first parameter: ', arguments[0]);
  console.log('length: ', arguments.length);
}

message('Hi', 23);
// it's also possible to access the name of a function
// this can be useful if it's needed to be controlled wich function will be executed
console.log(message.name);
