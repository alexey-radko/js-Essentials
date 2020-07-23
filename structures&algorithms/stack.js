// create Stack

function Stack() {
  this.count = 0;
  this.storage = {};

  // add value onto the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // removes and returns the value at the end of the stack

  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    let result = this.storage[this.count];

    delete this.storage[this.count];

    return result;
  };
}

let myStack = new Stack();

myStack.push('alexey');
myStack.push('yuliya');

myStack.pop();

console.log(myStack);
