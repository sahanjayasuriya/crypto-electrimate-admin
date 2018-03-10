import { Component, Inject, Input, Optional, ViewChild } from '@angular/core';

import { NG_ASYNC_VALIDATORS, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';

import { animations, ElementBase } from '../form';

@Component({
    selector: 'form-text-area',
    template: `
    <div class="form-group" [ngClass]="{
   'has-success':!(invalid | async) && (model.touched || model.dirty),
    'text-success':!(invalid | async) && (model.touched || model.dirty),
    'has-danger':(invalid | async) && (model.touched || model.dirty),
    'text-danger':(invalid | async) && (model.touched || model.dirty)
    }">
      <label *ngIf="label" [attr.for]="identifier">{{label}}</label>
      <textarea
        autoGrow
        [placeholder]="placeholder"
        [(ngModel)]="value"
        [ngClass]="{'ng-invalid': (invalid | async),'ng-valid': !(invalid | async), 'ng-touched': touched, 'ng-untouched': !touched}"
        [id]="identifier"
        class="form-control"
        [disabled]="disabled"
      ></textarea>
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
        useExisting: FormTextAreaComponent,
        multi: true,
    }],
})
export class FormTextAreaComponent extends ElementBase<string> {


    @Input() public disabled: boolean;
    @Input() public validationMessages: Array<any>;
    @Input() public label: string;
    @Input() public placeholder: string;

    @ViewChild(NgModel) model: NgModel;

    public identifier = `form-text-area-${identifier++}`;

    constructor(@Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
                @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,) {
        super(validators, asyncValidators);
    }
}

let identifier = 0;
