import { customerDetails } from "../helpers/01-printHelpers"

// declare the fisrtname, lastname and age with the type 
var fisrtname : string = 'Ahmed'
var lastname : string = 'abdelnasser'
var age : number = 15 


// declare the custom type and set the value of the var with this type;
type customerDetails = 
{
    firstName: 'ahmed',
    lastName: 'abdelnasser',
    age : 15
}
var customer1 : customerDetails = { 
    firstName : 'ahmed',
    lastName : 'abdelnasser',
    age: 15
    
}

console.log(customer1);

