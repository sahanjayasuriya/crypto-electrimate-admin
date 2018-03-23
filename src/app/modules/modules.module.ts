import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModulesComponent} from "./modules.component";
import {ModuleListComponent} from "./module-list/module-list.component";
import {ModuleFormComponent} from "./module-form/module-form.component";
import {ModulesRoutingModule} from "./modules-routing.module";
import {AppFormsModule} from "../forms/app.forms.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {LoadingModule} from "ngx-loading";
import {NgxQRCodeModule} from "ngx-qrcode3";

@NgModule({
    imports: [
        CommonModule,
        ModulesRoutingModule,
        ReactiveFormsModule,
        NgxDatatableModule,
        AppFormsModule,
        FormsModule,
        SharedModule,
        LoadingModule,
        NgxQRCodeModule
    ],
    declarations: [
        ModulesComponent,
        ModuleListComponent,
        ModuleFormComponent
    ]
})
export class ModulesModule {
}
