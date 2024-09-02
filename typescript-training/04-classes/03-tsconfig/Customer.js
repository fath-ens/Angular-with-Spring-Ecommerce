"use strict";
class Customers {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._LastName = theLast;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
}
/*
let myCustomer = new Customer();

myCustomer.firstName = "Fatih";
myCustomer.LastName = "Enes";
*/
let myCustomer = new Customers("Fatih", "Enes");
/*
console.log(myCustomer.firstName);
console.log(myCustomer.LastName);
*/
myCustomer.firstName = "uslu";
console.log(myCustomer.firstName);
