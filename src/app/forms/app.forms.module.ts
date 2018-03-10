import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormRadioButton } from './components/radio-button';
import { NicValidator } from './validators/nic-validator';
import { PhoneNumberValidator } from './validators/phone-number-validator';
import { AddressValidator } from './validators/address-validator';
import { NumberValidator } from "./validators/number-validator";
import {SelectModule} from "ng-select";
import {MyDatePickerModule} from "mydatepicker";
import {HexadecimalValueValidator} from "./validators";
import {
  FormDateComponent, FormEmailComponent, FormPasswordComponent, FormSelectComponent, FormTextAreaComponent,
  FormTextComponent, ValidationComponent
} from "./components";
import {FormNumberComponent} from "./components/number";


// export const allComponents = Object.keys(components).map(k => components[k]);


@NgModule({
    declarations: [
        FormDateComponent,
        FormEmailComponent,
        FormNumberComponent,
        FormTextComponent,
        FormTextAreaComponent,
        FormRadioButton,
        FormSelectComponent,
        FormPasswordComponent,
        ValidationComponent,
        HexadecimalValueValidator,
        NicValidator,
        PhoneNumberValidator,
        AddressValidator,
        NumberValidator
    ],
    imports: [
        CommonModule,
        FormsModule,
        SelectModule,
        MyDatePickerModule
    ],
    exports: [
        FormDateComponent,
        FormEmailComponent,
        FormNumberComponent,
        FormTextComponent,
        FormTextAreaComponent,
        FormRadioButton,
        FormSelectComponent,
        FormPasswordComponent,
        ValidationComponent,
        HexadecimalValueValidator,
        NicValidator,
        PhoneNumberValidator,
        AddressValidator,
        NumberValidator
    ],
    providers: []
})
export class AppFormsModule {
}
