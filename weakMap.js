//#########################
// Weak Map
//#########################



// the difference to map:
// the keys in weakmap just can be objects
// if the objects will get an null value this object will be automatically removed from WeakMap
// there are just this methods: get, set, has delete

const cache = new WeakMap()

function casheUser(user) {
    if(!cache.has(user)){
        cache.set(user, Date.now())
    }
    return cache.get(user)
}


let obj1 = {
    name: 'Alexey',
    age: 22
}

let obj2 = {
    name: 'Yuliya',
    age: 22
}

casheUser(obj1)
casheUser(obj2)

console.log(cache);


//  obj1 = null //
console.log(casheUser(obj1));
console.log(cache.has(obj1))
