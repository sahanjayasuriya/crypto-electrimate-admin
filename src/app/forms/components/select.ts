import {Component, EventEmitter, Inject, Input, Optional, Output, ViewChild} from '@angular/core';

import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgModel} from '@angular/forms';

import {animations, ElementBase} from '../form';
import {IOption} from 'ng-select';

@Component({
  selector: 'form-select',
  template: `
    <div class="form-group" [ngClass]="{
    'has-success':!(invalid | async) && (model.touched || model.dirty),
    'text-success':!(invalid | async) && (model.touched || model.dirty),
    'has-danger':(invalid | async) && (model.touched || model.dirty),
    'text-danger':(invalid | async) && (model.touched || model.dirty)
    }">
      <label *ngIf="label" [attr.for]="identifier">{{label}}</label>
      <ng-select
        [placeholder]="placeholder"
        [id]="identifier"
        [options]="options"
        [ngClass]="{'ng-invalid': (invalid | async),'ng-valid': !(invalid | async), 'ng-touched': touched, 'ng-untouched': !touched}"
        [(ngModel)]="value"
        [disabled]="disabled"
        (selected)="select($event)">
      </ng-select>
      <validation
        [@flyInOut]="'in,out'"
        *ngIf="(invalid | async) && (model.touched || model.dirty)"
        [messages]="failures | async">
      </validation>
    </div>
  `,
  styles: [
      `
      .below {
        border: solid 1px #4dbd74 !important;
      }
    `
  ],
  animations,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: FormSelectComponent,
    multi: true,
  }],
})
export class FormSelectComponent extends ElementBase<string | Array<string>> {

  @Input() public disabled: boolean;
  @Input() public validationMessages: Array<any>;
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public options: Array<IOption>;

  @Output() itemSelected = new EventEmitter<{ value: string, label: string }>();

  @ViewChild(NgModel) model: NgModel;

  public identifier = `form-select-${identifier++}`;

  constructor(@Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
              @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,) {
    super(validators, asyncValidators);
  }

  public select($event) {
    this.itemSelected.emit({
      value: $event.value,
      label: $event.label
    });
  }
}

let identifier = 0;
