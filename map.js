const obj = {
    name: 'Alexey',
    age:23,
    job: 'Developer'
}

// other format of data structure

const entries = [
    ['name', 'Alexey'],
    ['age', 23],
    ['job', 'Developer']
]

// make obj to array
console.log(Object.entries(obj))

// make reverse
// console.log(Object.fromEntries(entries))

// die besondarcheit beim map ist dass die keys können objekte sein
const map = new Map(Object.entries(obj))

// the same as obj.job
console.log(map.get('job'))

map.
    set('newField', 42)
    .set(obj, 'value of obj') // it's also possible to allocate to obj an value

console.log(map.get(obj))

// delete a key and returns a boolean
map.delete('job')
// check if a key avaliable
map.has('job')
map.size

// delete all keys
//map.clear()

// ########################


for (let entry of map.entries()) {
    console.log(entry)
}
for (let [key, value] of map ) {
    console.log(key, value)
}

for (let val of map.values()) {
    console.log(val)
}
for (let val of map.keys()) {
    console.log(val)
}

//###########################

//const array = [...map]

// example
// add to each user their visiting time
const users = [
    {name:'Alex'},
    {name: 'Yuliya'},
    {name: 'Max'}
]

const visitingTime = new Map()

//visitingTime.set(users[0], new Date())

for( let user of users) {
    visitingTime.set(user, new Date())
}

function lastVisit (user) {
    return visitingTime.get(user)
}
console.log(lastVisit(users[2]))

console.log(visitingTime)