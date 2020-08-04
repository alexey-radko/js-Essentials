// BIND
const person = {
  name: 'Alexey',
  age: 22,
  sayHello: sayHello,
  // bind function allows us to change context
  sayHelloWindow: sayHello.bind(window),
  logInfo: function (job) {
    console.log(`Name is ${this.name}, age: ${this.age}, job is ${job}`);
  },
};

const newPerson = {
  name: 'Juliya',
  age: 22,
};

function sayHello() {
  console.log(this, 'Say Hello');
}

// in function bind we can put any context we want

person.logInfo.bind(newPerson)('nurse');

// gives the same result
// the method bind returns a FUNCTION !!!!!!!!!!!!!!!!

const fnLogInfo = person.logInfo.bind(newPerson, 'nurse');
fnLogInfo();

// CALL

// the method call is like bind but doesn't return a function and call revoke immediately
person.logInfo.call(newPerson, 'nurse');

// APPLY

// the differ to the method call that the second parameter should be an array
person.logInfo.apply(newPerson, ['nurse']);

const data = [1, 2, 3, 4];

Array.prototype.multBy = function (n) {
  // this is always an object that is left from the point
  return this.map((i) => {
    return i * n;
  });
};

//Write your own bind function

function logPerson(job) {
  console.log(`Person is ${this.name}, age ${this.age}, job ${job == undefined ? 'no job' : job}`);
}

function bind(person, fn) {
  return function (...args) {
    console.log('------------');
    fn.call(person, ...args);
  };
}

bind(person, logPerson)('developer');
bind(newPerson, logPerson)();
