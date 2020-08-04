//####################
// Weak Set
//####################



// just contains objects as a key
// if the object will be removed by garbagecollector the same object will be also removed from weakSet
// has just add, and has methods



const users = [

    {name: 'Wasja'},
    {name: 'Mila'},
    {name: 'Anton'}
]

let visits = new WeakSet();
visits.add(users[0]).add(users[1])


users.splice(1,1);
console.log(visits.has(users[0]));
console.log(visits.has(users[1]));
console.log(visits.has(users[2]));