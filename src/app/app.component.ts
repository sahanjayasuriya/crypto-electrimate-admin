import {Component, ViewContainerRef} from '@angular/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [`
        .btn {
            color: white;
        }
    `]
})
export class AppComponent {

    //Set toastr container ref configuration for toastr positioning on screen
    constructor(private router: Router, public toastr: ToastsManager, vRef: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vRef);
    }

}
