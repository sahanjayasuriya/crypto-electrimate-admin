import { NgModel } from '@angular/forms';

import { Observable } from 'rxjs';

import { ValueAccessorBase } from './value-accessor';

import { AsyncValidatorArray, message, validate, ValidationResult, ValidatorArray } from './validate';

export abstract class ElementBase<T> extends ValueAccessorBase<T> {
    protected abstract model: NgModel;
    protected abstract validationMessages: Array<any>;
    protected abstract disabled: boolean;

    constructor(protected validators: ValidatorArray,
                protected asyncValidators: AsyncValidatorArray) {
        super();
    }

    protected validate(): Observable<ValidationResult> {
        return validate(this.validators, this.asyncValidators)(this.model.control);
    }

    get invalid(): Observable<boolean> {
        return this.validate().map(v => Object.keys(v || {}).length > 0);
    }

    get failures(): Observable<Array<string>> {
        return this.validate().map(v => Object.keys(v).map(k => message(v, k, this.validationMessages)));
    }
}
