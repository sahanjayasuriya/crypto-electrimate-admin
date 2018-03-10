import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {UserFormComponent} from './user-form/user-form.component';
import {UserListComponent} from './user-list/user-list.component';
import {UsersRoutingModule} from './users-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {AppFormsModule} from "../forms/app.forms.module";
import {UsersComponent} from "./users.component";
import {SharedModule} from "../shared/shared.module";
import {LoadingModule} from "ngx-loading";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    AppFormsModule,
    FormsModule,
    SharedModule,
    LoadingModule
  ],
  declarations: [
    UserFormComponent,
    UserListComponent,
    UsersComponent
  ]
})
export class UsersModule {
}
