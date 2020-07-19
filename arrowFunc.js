const sum = (a, b) => a + b;

// the same as
// const sum = (a,b) => {
//     return a+b;
// }

const cube = (a) => a ** 3;
console.log(cube(2))


// advantage with context
function  log() {
    console.log(this);
}

// arrow function has no their own context that's way it shows the context from obj above
const arrowLog = () => console.log(this);

const person = {
    name: 'Alexey',
    age: 22,
    log: log,
    arrowLog: arrowLog,
    logDelay: function () {
        // arrow function always takes the context from above element
        setTimeout(() => console.log(this.name, this.age), 1000)
        setTimeout(function () {
            console.log(this.name, this.age); // will return undefined
        }, 2000)
    }
}
// person.log(); // return the person obj
person.arrowLog(); // returns the global object
person.logDelay();