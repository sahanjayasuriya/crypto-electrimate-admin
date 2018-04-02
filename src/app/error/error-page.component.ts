import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-error-page',
    templateUrl: './error-page.component.html',
    styleUrls: ['./error-page.component.scss']
})

export class ErrorPageComponent {
    currentDate: any = new Date();

    constructor(protected router: Router,
                protected route: ActivatedRoute) {
    }

    //Redirect to dashboard
    goHome() {
        this.router.navigate(["/dashboard"]);
    }
}