var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this._firstName = theFirst;
        this._LastName = theLast;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
/*
let myCustomer = new Customer();

myCustomer.firstName = "Fatih";
myCustomer.LastName = "Enes";
*/
var myCustomer = new Customer("Fatih", "Enes");
/*
console.log(myCustomer.firstName);
console.log(myCustomer.LastName);
*/
myCustomer.firstName = "uslu";
console.log(myCustomer.firstName);
