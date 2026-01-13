// Declarative function 

function helloOne()
{
    console.log('hello one')
}

helloOne()

// Anoymus function 

var helloTwo = function (){
    console.log('hello Two')
}
helloTwo()
 
// ES6 function syntax or arrow function 
var helloThree =()=>{
    console.log('Hello Three')
}
helloThree()

// function with arguments 
function printFullName(firstname , lastName)
{
    console.log(firstname + ' '+ lastName)
}
printFullName('Ahmed','Abdelnasser')    // user can't store the return of the function in the var because the no return for the function 

// function with return multiplyByTwo function 
function multiplyByTwo(num)
{
    return num*2
}
var resault = multiplyByTwo(50);
console.log(resault)
// import function 
import { printNumber } from "../helpers/01-printHelpers.js"
help.printNumber(5)
// import everything 
import * as help from '../helpers/01-printHelpers.js'
help.printNumber(10)

