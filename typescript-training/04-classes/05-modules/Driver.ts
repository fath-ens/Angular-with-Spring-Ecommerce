import { Customers } from "./Customer";


let myCustomer = new Customers("Fatih", "Enes");
/*
console.log(myCustomer.firstName);
console.log(myCustomer.LastName);
*/

myCustomer.firstName = "uslu";
console.log(myCustomer.firstName);