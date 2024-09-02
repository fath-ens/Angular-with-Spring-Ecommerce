export class Customers{
    constructor(private _firstName : string, private _LastName : string){
    }

    get firstName(): string{
        return this._firstName;
    } 

    set firstName(value: string){
        this._firstName=value;
    }
}
