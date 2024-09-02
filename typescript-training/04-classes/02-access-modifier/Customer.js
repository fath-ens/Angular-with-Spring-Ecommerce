var Customers = /** @class */ (function () {
    function Customers(theFirst, theLast) {
        this._firstName = theFirst;
        this._LastName = theLast;
    }
    Object.defineProperty(Customers.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customers;
}());
/*
let myCustomer = new Customer();

myCustomer.firstName = "Fatih";
myCustomer.LastName = "Enes";
*/
var myCustomer = new Customers("Fatih", "Enes");
/*
console.log(myCustomer.firstName);
console.log(myCustomer.LastName);
*/
myCustomer.firstName = "uslu";
console.log(myCustomer.firstName);
