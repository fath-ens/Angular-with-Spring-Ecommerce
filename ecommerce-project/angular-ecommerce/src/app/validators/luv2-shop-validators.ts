import { AbstractControl, ValidationErrors } from '@angular/forms';

export class Luv2ShopValidators {

    static notOnlyWhitespace(control: AbstractControl): ValidationErrors | null {
        if (control.value != null && control.value.trim().length === 0) {
            return { 'notOnlyWhitespace': true };
        }
        return null;
    }

}