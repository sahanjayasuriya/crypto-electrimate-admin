import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {ChartistModule} from 'ng-chartist';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatchHeightModule} from "../shared/directives/match-height.directive";
import {LoginPageComponent} from './login-page.component';
import {LoginPageRoutingModule} from './login-page-routing.module';
import {FormsModule} from "@angular/forms";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartistModule,
        NgbModule,
        MatchHeightModule,
        LoginPageRoutingModule
    ],
    exports: [],
    declarations: [
        LoginPageComponent
    ],
    providers: [],
})
export class LoginPageModule {
}
