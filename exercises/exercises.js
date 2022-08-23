import {countCharters, countCharters2, getSubstring} from "./exercise1.js"


// Testing

console.log(countCharters("fdjksdjjnjads"))
console.log(countCharters("f"))
console.log(countCharters(123456))
console.log(countCharters([1,2,3,4,5]))
console.log(countCharters({'name':'Aldo Rodrigo', 'age':25}))

console.log(countCharters2("fdjksdjjnjads"))
console.log(countCharters2("f"))
console.log(countCharters2(123456))
console.log(countCharters2([1,2,3,4,5]))
console.log(countCharters2({'name':'Aldo Rodrigo', 'age':25}))

console.log(getSubstring("Aldo Rodrigo", 3))