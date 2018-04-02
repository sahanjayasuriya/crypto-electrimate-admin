import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFireAuth} from "angularfire2/auth";
import {ToastrService} from "../shared/toastr/toastr.service";
import {AngularFireDatabase} from "angularfire2/database";

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {

    @ViewChild('f') loginForm: NgForm;

    currentDate = new Date();
    email: string;
    password: string;

    constructor(private router: Router, private route: ActivatedRoute, private angularFireAuth: AngularFireAuth, private toast: ToastrService, private angularFireDatabase: AngularFireDatabase) {
    }

    // On submit button click
    onSubmit() {

        this.angularFireDatabase.database
            .ref('users')
            .orderByChild('email')
            .equalTo(this.email)
            .once('child_added')
            .then((data) => {
                if (data.val().userType === 'ADMIN') {
                    this.angularFireAuth.auth.signInWithEmailAndPassword(this.email, this.password)
                        .then((data) => {
                            this.toast.typeSuccess('Success', 'Logged in successfully');
                            this.router.navigate(['/dashboard']);
                        })
                        .catch((err) => {
                            this.toast.typeError('Error', err.message);
                        });
                } else {
                    this.toast.typeError('Error', 'Invalid credentials');
                }
            })
            .catch((err) => {
                this.toast.typeError('Error', 'Permission denied');
            });


    }
}
