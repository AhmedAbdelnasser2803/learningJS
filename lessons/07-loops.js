// loops 
// for loop
for(let i=0 ; i<5 ;i++)
{
    console.log('hello world')
}

cars = ['volvo' ,'BMW' , 'marcides']
cars[5]='dodg'

// loop for array 
for(car of cars)
{
    console.log(car)
    if (car=='BMW') 
        break       //stoped for loop
}

// forEach method 
console.log('foreach method')
cars.forEach(element => {
    console.log(element)
});