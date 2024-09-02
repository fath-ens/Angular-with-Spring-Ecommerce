class Customers{
    private _firstName : string;
    private _LastName : string;

    constructor(theFirst: string, theLast : string){
        this._firstName = theFirst;
        this._LastName = theLast;
    }

    get firstName(): string{
        return this._firstName;
    } 

    set firstName(value: string){
        this._firstName=value;
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