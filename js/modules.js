import  sayHello,{PI, user, SayHi} from "./conts.js"
import {arithmetic as arith} from "./arithmetic.js"

console.log("File modules.js")

console.log(PI, user)   

console.log(arith.sumar(15,25))
console.log(arith.restar(15,25))
let sayHi = new SayHi()
sayHi
//console.log(password)
//sayHello()
sayHello()