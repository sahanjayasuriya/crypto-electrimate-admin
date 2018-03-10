import { AfterViewInit, Component, forwardRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FormRadioButton),
    multi: true
};

@Component({
    selector: 'form-radio-button',
    template: `
    <div class="form-group" [ngClass]="{
    'has-success': success,
    'text-success': success,
    'has-danger':danger,
    'text-danger':danger
    }">
      <label *ngIf="label" [attr.for]="identifier">{{ label }}</label>
      <ng-container *ngIf="inline">
        <div class="col-md-12">
          <label class="radio-inline" *ngFor="let rbtn of rb">
            <input
              name="{{ name }}"
              type="radio"
              [(ngModel)]="value"
              (blur)="onBlur()"
              [disabled]="disabled"
              value="{{ rbtn.value }}"> {{ rbtn.label }}
          </label>
        </div>
      </ng-container>
      <ng-container *ngIf="!inline">
        <div *ngFor="let rbtn of rb" [ngClass]="{'radio-inline': inline, 'radio': !inline}">
          <label>
            <input
              name="{{ name }}"
              type="radio"
              [(ngModel)]="value"
              (blur)="onBlur()"
              [disabled]="disabled"
              value="{{ rbtn.value }}"> {{ rbtn.label }}
          </label>
        </div>
      </ng-container>
      <validation
        [@flyInOut]="'in,out'"
        *ngIf="danger"
        [messages]="failures | async">
      </validation>
    </div>
  `,
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
    styles: ['.radio-inline{margin-right: 15px}']
})
export class FormRadioButton implements ControlValueAccessor, AfterViewInit {


    @Input() public rb: Array<RadioButtonOption>;
    @Input() public label: string;
    @Input() public inline: boolean;
    @Input() public name: String;
    @Input() public disabled: boolean;
    @ViewChild(NgModel) model: NgModel;

    success: boolean = false;
    danger: boolean = false;

    //The internal data model
    private innerValue: any = '';

    //Placeholders for the callbacks which are later provided
    //by the Control Value Accessor
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    ngAfterViewInit(): void {
        this.success = this.model && !this.model.invalid && (this.model.touched || this.model.dirty);
        this.danger = this.model && this.model.invalid && (this.model.touched || this.model.dirty);
    }

    @Input()
    //get accessor
    get value(): any {
        return this.innerValue;
    };

    //set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    //Set touched on blur
    onBlur() {
        this.onTouchedCallback();
    }

    //From ControlValueAccessor interface
    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    public getId(increase: boolean) {
        return 'form-radio-button-' + (increase ? ++uniqueId : uniqueId);
    }

}

export interface RadioButtonOption {
    value: string | number;
    label: string;
}

let uniqueId = 0;
