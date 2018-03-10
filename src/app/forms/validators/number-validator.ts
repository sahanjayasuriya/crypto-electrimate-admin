import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from "@angular/forms";

@Directive({
    selector: '[num][ngModel]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: NumberValidator, multi: true}
    ]
})
export class NumberValidator {
    @Input() min: number;
    @Input() max: number;

    validate(control: AbstractControl): ValidationErrors | null {
        if (!control.value) { // the [required] validator will check presence, not us
            return null;
        }

        const value = control.value;
        if (value > this.min && value < this.max) {
            return null;
        }

        return {num: 'Number out of range. Enter a number between ' + this.min + ' ' + ' and ' + this.max};
    }
}
