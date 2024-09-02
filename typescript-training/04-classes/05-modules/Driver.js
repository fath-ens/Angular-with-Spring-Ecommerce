"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = require("./Customer");
let myCustomer = new Customer_1.Customers("Fatih", "Enes");
/*
console.log(myCustomer.firstName);
console.log(myCustomer.LastName);
*/
myCustomer.firstName = "uslu";
console.log(myCustomer.firstName);
