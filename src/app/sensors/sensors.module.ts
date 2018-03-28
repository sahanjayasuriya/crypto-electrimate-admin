import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppFormsModule} from "../forms/app.forms.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {LoadingModule} from "ngx-loading";
import {NgxQRCodeModule} from "ngx-qrcode3";
import {SensorsComponent} from "./sensors.component";
import {SensorListComponent} from "./sensor-list/sensor-list.component";
import {SensorFormComponent} from "./sensor-form/sensor-form.component";
import {SensorsRoutingModule} from "./sensors-routing.module";

@NgModule({
    imports: [
        CommonModule,
        SensorsRoutingModule,
        ReactiveFormsModule,
        NgxDatatableModule,
        AppFormsModule,
        FormsModule,
        SharedModule,
        LoadingModule,
        NgxQRCodeModule
    ],
    declarations: [
        SensorsComponent,
        SensorListComponent,
        SensorFormComponent
    ]
})
export class SensorsModule {
}
