//##########################################
// Destruction
//##########################################

function calcValues(a, b) {
  return [a + b, a - b, undefined, a * b, a / b];
}

// let result = calcValues(2, 10);
// let sum = result[0];
// let sub = result[1];

// in order to write less code the code above can be overwritten the way like this

// let [sum, sub] = calcValues(2, 10);

// it's also possible to add default values like notDef = 23
// with spread operator we can easily add the rest values from the array
let [sum, , notDef = 23, ...other] = calcValues(2, 10);
console.log(sum, notDef, other);

// Objects

const person = {
  name: 'Max',
  age: 20,
  address: {
    country: 'DE',
    city: 'Berlin',
  },
};

// const name = person.name
const { name, age, car = 'no car' } = person;
console.log(name, age, car);

// in order to avoid conflicts with variables names we can use this
const { name: firstName } = person;
// also works with default values
// const { name: firstName = 'Name is not av.' } = person;
console.log(firstName);

const {
  address: { country, city },
} = person;
console.log(country, city);

// Example to use
// function logPerson(per) {
//   console.log(per.name, per.age);
// }
function logPerson({ name, age }) {
  console.log(name, age);
}

logPerson(person);
