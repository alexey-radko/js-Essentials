const set = new Set ( [1,2,3,3, 5,5, 6])

// will shows all values without redundancies
// every value is unic
console.log(set)

set.add(10).add(20).add(20) // second 20 won't be added
set.has(10) // returns a boolean
set.size
set.delete(1) // delete a value and returns a boolean
set.clear() // deletes all set

console.log(set.values())
// kljuchi i snathenija odinakowi

//################

function uniqValues(array) {
   // return Array.from(new Set(array))
    return [... new Set(array)]
}

console.log(uniqValues([1,1,1,23,23,1,3,5,6]))