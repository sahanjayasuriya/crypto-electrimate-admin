import { Component, Inject, Input, Optional, ViewChild } from '@angular/core';

import { NG_ASYNC_VALIDATORS, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';

import { animations, ElementBase } from '../form';

@Component({
    selector: 'form-email',
    template: `
    <div class="form-group" [ngClass]="{
    'has-success':!(invalid | async) && (model.touched || model.dirty),
    'text-success':!(invalid | async) && (model.touched || model.dirty),
    'has-danger':(invalid | async) && (model.touched || model.dirty),
    'text-danger':(invalid | async) && (model.touched || model.dirty)
    }">
      <label *ngIf="label" [attr.for]="identifier">{{label}}</label>
      <input
        type="email"
        [placeholder]="placeholder"
        [(ngModel)]="value"
        [ngClass]="{'ng-invalid': (invalid | async),'ng-valid': !(invalid | async), 'ng-touched': touched, 'ng-untouched': !touched}"
        [id]="identifier"
        class="form-control"
        [disabled]="disabled"
      />
      <validation
        [@flyInOut]="'in,out'"
        *ngIf="(invalid | async) && (model.touched || model.dirty)"
        [messages]="failures | async">
      </validation>
    </div>
  `,
    animations,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: FormEmailComponent,
        multi: true,
    }],
})
export class FormEmailComponent extends ElementBase<string> {


    @Input() public disabled: boolean;
    @Input() public validationMessages: Array<any>;
    @Input() public label: string;
    @Input() public placeholder: string;
    public patternValidator;

    @ViewChild(NgModel) model: NgModel;

    public identifier = `form-email-${identifier++}`;

    constructor(@Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
                @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,) {
        super(validators, asyncValidators);
    }

}

let identifier = 0;
