// set

function MySet() {
  let collections = [];

  // check of presence of an element and return true or false
  this.has = function (value) {
    return collections.indexOf(value) !== -1;
  };

  // this method will return all methods in the set
  this.values = function () {
    return collections;
  };

  // this method will add an element to the set without redundancy
  this.add = function (elem) {
    if (!this.has(elem)) {
      collections.push(elem);
      return true;
    }
    return false;
  };

  // this method will remove an element from the set
  this.remove = function (elem) {
    if (this.has(elem)) {
      let loc = collections.indexOf(elem);
      collections.splice(loc, 1);
      return true;
    }
    return false;
  };

  // this method will return the size of the set
  this.size = function () {
    return collections.length;
  };

  // this method will return an union of two sets
  this.union = function (otherSet) {
    let newSet = new MySet();

    this.values().forEach((element) => {
      newSet.add(element);
    });

    otherSet.values().forEach((element) => {
      newSet.add(element);
    });
    return newSet;
  };

  // this method will return an intersection of two sets as a new Set

  this.intersection = function (otherSet) {
    let intersection = new MySet();
    this.values().forEach((e) => {
      if (otherSet.has(e)) {
        intersection.add(e);
      }
    });
    return intersection;
  };
  // this method will return the difference of two sets as a new set
  this.difference = function (otherSet) {
    let difference = new MySet();
    this.values().forEach((e) => {
      if (!otherSet.has(e)) {
        difference.add(e);
      }
    });

    return difference;
  };
  // subset method will test if the set is a subset of a different set
  this.subset = function (otherSet) {
    return this.values().every((e) => {
      return otherSet.has(e);
    });
  };
}

let testSet = new MySet();
let testSet1 = new MySet();

testSet.add(1);
testSet.add(2);
testSet.add(2);
testSet.add(3);
testSet1.add(3);
testSet1.add(34);
testSet1.add(2);

let union = testSet.union(testSet1);

console.log(testSet.values());
console.log(union.values());
console.log(testSet.difference(testSet1).values());
console.log(testSet.intersection(testSet1).values());
console.log(testSet.subset(testSet1));
