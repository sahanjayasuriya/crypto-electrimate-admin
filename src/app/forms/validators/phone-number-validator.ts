import {Directive} from '@angular/core';

import {AbstractControl, NG_VALIDATORS} from '@angular/forms';

@Directive({
    selector: '[phoneNumber][ngModel]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: PhoneNumberValidator, multi: true}
    ]
})
export class PhoneNumberValidator {
    validate(control: AbstractControl): { [validator: string]: string } {
        const expression = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (!control.value) { // the [required] validator will check presence, not us
            return null;
        }

        const value = control.value.trim();
        if (expression.test(value)) {
            return null;
        }

        return {nic: 'Telephone number must be 10 digits'};
    }
}
