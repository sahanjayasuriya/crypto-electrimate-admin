import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {FooterComponent} from "./footer/footer.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {ToggleFullscreenDirective} from "./directives/toggle-fullscreen.directive";
import {AppFormsModule} from "../forms/app.forms.module";
import {SmartResizeDirective} from "./smart-resize.directive";
import {AutofocusDirective} from "./auto-focus.directive";
import {RecordStatusDirective} from "./record-status.directive";
import {ModalComponent} from "./modal/modal.component";
import {ModalModule} from "ngx-bootstrap";

@NgModule({
  exports: [
    CommonModule,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ToggleFullscreenDirective,
    NgbModule,
    ModalComponent,
    RecordStatusDirective,
    SmartResizeDirective
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
    AppFormsModule,
    ModalModule.forRoot(),
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ToggleFullscreenDirective,
    RecordStatusDirective,
    AutofocusDirective,
    SmartResizeDirective,
    ModalComponent
  ]
})
export class SharedModule {
}
