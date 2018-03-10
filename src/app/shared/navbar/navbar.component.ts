import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFireAuth} from "angularfire2/auth";
import {ToastrService} from "../toastr/toastr.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent{

  constructor(private router: Router, private route: ActivatedRoute, private angularFireAuth: AngularFireAuth, private toast: ToastrService){}

  onLogout(){
    this.angularFireAuth.auth.signOut()
      .then((data) => {
        this.toast.typeSuccess('Success', 'Logged out successfully');
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        this.toast.typeError('Error', err.message);
      });
  }
}
