// Queue

function Queue() {
  let collection = [];

  this.print = function () {
    console.log(collection);
  };
  this.enqueue = (e) => collection.push(e);
  this.dequeue = () => collection.shift();
  this.isEmpty = () => collection.length === 0;

  this.first = () => collection[0];
  this.size = () => collection.length;
}

let q = new Queue();

console.log(q.isEmpty());
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.size());
console.log(q.first());
q.dequeue();

q.print();
console.log(q.isEmpty());

function PQ() {
  let collections = [];

  this.print = () => {
    console.log(collections);
  };
  this.add = (e) => {
    let added = false;
    if (collections.length !== 0) {
      for (let i = 0; i < collections.length; i++) {
        if (e[1] < collections[i][1]) {
          collections.splice(i, 0, e);
          added = true;
          break;
        }
      }
      if (added == false) {
        collections.push(e);
      }
    } else {
      collections.push(e);
    }
  };
}

let pq = new PQ();
pq.add(['alexey', 12]);
pq.add(['alex', 1]);
pq.add(['mura', 3]);
pq.add(['ira', 2]);

pq.print();
