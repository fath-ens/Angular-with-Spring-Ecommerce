"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customers = void 0;
class Customers {
    constructor(_firstName, _LastName) {
        this._firstName = _firstName;
        this._LastName = _LastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
}
exports.Customers = Customers;
