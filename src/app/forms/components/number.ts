import { Component, EventEmitter, Inject, Input, Optional, Output, ViewChild } from '@angular/core';

import { NG_ASYNC_VALIDATORS, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';

import { animations, ElementBase } from '../form';

@Component({
    selector: 'form-number',
    template: `
    <div class="form-group" [ngClass]="{
    'has-success':!(invalid | async) && (model.touched || model.dirty),
    'text-success':!(invalid | async) && (model.touched || model.dirty),
    'has-danger':(invalid | async) && (model.touched || model.dirty),
    'text-danger':(invalid | async) && (model.touched || model.dirty)
    }">
      <label *ngIf="label" [attr.for]="identifier">{{label}}</label>
      <input
        type="number"
        [placeholder]="placeholder"
        [(ngModel)]="value"
        [ngClass]="{'ng-invalid': (invalid | async),'ng-valid': !(invalid | async), 'ng-touched': touched, 'ng-untouched': !touched}"
        [id]="identifier"
        class="form-control"
        [disabled]="disabled"
        (keyup)="keyUp($event)"
        (focusout)="focusOut($event)"
        [readonly]="readonly"
      />
      <validation
        [@flyInOut]="'in,out'"
        *ngIf="(invalid | async) && (model.touched || model.dirty)"
        [messages]="failures | async">
      </validation>
    </div>
  `,
    animations: [animations],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: FormNumberComponent,
        multi: true,
    }],
})
export class FormNumberComponent extends ElementBase<number> {

    @Input() public disabled: boolean;
    @Input() public validationMessages: Array<any>;
    @Input() public label: string;
    @Input() public placeholder: string;
    @Input() public readonly?: boolean = false;

    @Output() keyupEvent = new EventEmitter<{ value: number, label: string }>();
    @Output() focusoutEvent = new EventEmitter<{ value: number, label: string }>();

    @ViewChild(NgModel) model: NgModel;

    public identifier = `form-text-${identifier++}`;

    constructor(@Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
                @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,) {
        super(validators, asyncValidators);
    }

    public keyUp($event) {
        this.keyupEvent.emit({
            value: $event.value,
            label: $event.label
        });
    }

    public focusOut($event) {
        this.focusoutEvent.emit({
            value: $event.value,
            label: $event.label
        });
    }
}

let identifier = 0;
