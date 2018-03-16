import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../user-metadata';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserService} from "../../services/user.service";
import {ToastrService} from "../../shared/toastr/toastr.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @ViewChild('f')
  private form: NgForm;

  title: string;
  user: User;
  id: number;
  action: string;
  submitActionName: string;
  loading: boolean = false;

  validationMessages = {
    displayName: {
      'required': 'Display Name cannot be empty',
      'maxlength': 'Display Name cannot contain more than 20 characters',
      'pattern': 'Display Name cannot contain any special characters'
    },
    emailAddress: {
      'required': 'Email cannot be empty',
      'email': 'Invalid email address'
    },
    password: {
      'required': 'Password cannot be empty',
      'minLength': 'Password should contain more than 6 characters'
    },
      phoneNumber: {
          pattern: 'Invalid phone number'
      }
  };

  constructor(protected router: Router,
              protected route: ActivatedRoute,
              private userService: UserService,
              private toast: ToastrService) {

  }

  ngOnInit() {
    this.user = new User();
    this.route.params.subscribe((params: Params) => {
      const parentUrl = this.route.parent.snapshot.url[this.route.parent.snapshot.url.length - 1];
      const action: string = parentUrl ? parentUrl.path : 'new';
      this.setAction(params['id'], action);
    });
  }

  submit(form, event){
    if (!form.invalid) {
      if (this.action === 'new') {
        this.loading = true;
        const user = form.value;
        console.log(form.value);
        this.userService.saveUser(user)
          .subscribe((data) => {
            this.toast.typeSuccess('Saved', 'User Saved Successfully');
            this.user = new User();
            this.form.reset();
            this.loading = false;
          }, (response) => {
          });
      } else if (this.action === 'list') {
        const user = form.value;
        user.id = this.id;
        if (this.submitActionName === 'update') {
          this.loading = true;
          this.userService.updateUser(user)
            .subscribe((data) => {
              this.toast.typeSuccess('Updated', 'User Updated Successfully');
              this.userService.updateTableEventEmitter.emit();
              this.loading = false;
              this.cancel();
            }, (response) => {
            });
        } else if (this.submitActionName === 'delete') {
          this.loading = true;
          this.userService.deleteUser(user)
            .subscribe((data) => {
              this.toast.typeSuccess('Deleted', 'User Successfully Deleted');
              this.userService.updateTableEventEmitter.emit();
              this.loading = false;
              this.cancel();
            }, (response) => {
            });
        } else if (this.submitActionName === 'disable') {
          this.loading = true;
          this.userService.disableUser(user)
            .subscribe((data) => {
              this.toast.typeSuccess('Updated', 'User Disabled Successfully');
              this.userService.updateTableEventEmitter.emit();
              this.loading = false;
              this.cancel();
            }, (response) => {
            });
        } else if (this.submitActionName === 'enable') {
          this.loading = true;
          this.userService.enableUser(user)
            .subscribe((data) => {
                this.toast.typeSuccess('Updated', 'User Enabled Successf0ully');
              this.userService.updateTableEventEmitter.emit();
              this.loading = false;
              this.cancel();
            }, (response) => {
            });
        }
        this.form.reset();
      }
    } else {
      event.preventDefault();
    }
  }

  canViewButton(action) {
    return this.action === action;
  }

  cancel() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  submitAction(action: string) {
    this.submitActionName = action;
  }

  setAction(id: number, action: string) {
    this.id = id;
    this.action = action;
    this.loadData();
  }

  private loadData(){
    if (this.action) {
      if (this.action !== 'new' && this.id) {
        this.loading = true;
        this.userService.getUser(this.id)
          .subscribe((user: User) => {
            this.user = user;
            this.loading = false;
          }, () => this.cancel());
      }
      switch (this.action.toLowerCase()) {
        case 'new':
          this.title = 'Create New User';
          break;
        case 'list':
          this.title = 'Edit User';
          break;
      }
    }
  }


}
