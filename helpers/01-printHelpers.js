export function printNumber(num)
{
    console.log(num)
}


// create the CustomerDetails export class 
class CustomerDetails
{
    // that contain the firstname method
    printFirstName(firstname) {
        console.log(firstname)
    }
    // print lastName method 
    /**
     * this method will print the lastname
     * @param {string} lastname 
     */
    printLastName(lastname) {
        console.log(lastname)
    }
}

export var customerDetails = new CustomerDetails