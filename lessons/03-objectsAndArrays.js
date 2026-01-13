//objects
customer = {
    firstName: 'ahmed',
    lastName: 'abdelnasser',
    car : ['volvo' ,'BMW' , 'marcides']
}

customer.firstName= 'mohamed'           //overwrite
customer['lastName']= 'saad'            //ovewrite by the second method

console.log(customer.firstName +' '+customer.lastName)      //concatination
console.log(`${customer['firstName']} ${customer['lastName']}`)   //interpolation & the second method to get the value of the object
console.log(`${customer.car[0]}`)
console.log(customer)


//array 
cars = ['volvo' ,'BMW' , 'marcides'] //define 
cars[0]= 'fiate'                     //overWrite for the first element
console.log(cars[0])                 //print the first element 
car[4]= 'none'                      //insert the element on the array 
console.log(cars[3])                 //print undefine element on the array



