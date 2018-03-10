import { Directive } from '@angular/core';

import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[address][ngModel]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: AddressValidator, multi: true}
    ]
})
export class AddressValidator {
    validate(control: AbstractControl): { [validator: string]: string } {
        const expression = /^[\da-zA-Z\-\s()-\/']+$/i;
        if (!control.value) { // the [required] validator will check presence, not us
            return null;
        }

        const value = control.value.trim();
        if (expression.test(value)) {
            return null;
        }

        return {nic: 'Address can not contain following characters - `~!@#$%^&*_+={}|[]:;<>?'};
    }
}
