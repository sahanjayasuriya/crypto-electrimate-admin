import { Directive } from '@angular/core';

import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
    selector: '[nic][ngModel]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: NicValidator, multi: true}
    ]
})
export class NicValidator {

    private expression = /^(\d{9}[vVXx]|\d{12})$/i;

    validate(control: AbstractControl): ValidationErrors | null {
        if (!control.value) { // the [required] validator will check presence, not us
            return null;
        }

        const value = control.value.trim();
        if (this.expression.test(value)) {
            return null;
        }

        return {nic: 'Invalid NIC number format. (Ex: 123456789V, 123456789012)'};
    }
}
