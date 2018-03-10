import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {ToastModule, ToastOptions} from 'ng2-toastr/ng2-toastr';

import {AppComponent} from './app.component';
import {ContentLayoutComponent} from './layouts/content/content-layout.component';
import {FullLayoutComponent} from './layouts/full/full-layout.component';

import {CustomOption} from './shared/toastr/custom-option';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {FIREBASE_CONFIG} from './app.firebase.config';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {ErrorPageComponent} from "./error/error-page.component";
import {ToastrService} from "./shared/toastr/toastr.service";
import {UserService} from "./services/user.service";
import {HttpClientModule} from "@angular/common/http";
import {ModalModule} from "ngx-bootstrap";
import {LoadingModule} from "ngx-loading";


@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    ContentLayoutComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ToastModule.forRoot(),
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgxDatatableModule,
    HttpClientModule,
    LoadingModule
  ],
  providers: [
    //Toastr providers
    {provide: ToastOptions, useClass: CustomOption},
    ToastrService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
