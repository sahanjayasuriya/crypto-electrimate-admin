import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../user-metadata';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserService} from "../../services/user.service";
import {ToastrService} from "../../shared/toastr/toastr.service";
import {UserModule} from "../user-module.metadata";
import {ModuleService} from "../../services/user-module.service";

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
    title: string;
    user: User;
    userModule: UserModule;
    id: string;
    action: string;
    submitActionName: string;
    loading: boolean = false;
    disabled: boolean;
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
        },
        moduleCode: {
            'required': 'Module Code cannot be empty',
            'maxlength': 'Module Code cannot contain more than 50 characters'
        },
        moduleName: {
            'maxlength': 'Module Name cannot contain more than 20 characters',
            'pattern': 'Module Name cannot contain any special characters'
        }
    };
    @ViewChild('f')
    private form: NgForm;

    constructor(protected router: Router,
                protected route: ActivatedRoute,
                private userService: UserService,
                private moduleService: ModuleService,
                private toast: ToastrService) {

    }

    ngOnInit() {
        this.user = new User();
        this.userModule = new UserModule();
        this.route.params.subscribe((params: Params) => {
            const parentUrl = this.route.parent.snapshot.url[this.route.parent.snapshot.url.length - 1];
            const action: string = parentUrl ? parentUrl.path : 'new';
            this.setAction(params['id'], action);
        });
    }

    submit(form, event) {
        if (!form.invalid) {
            if (this.action === 'new') {
                this.loading = true;
                const user = this.user;
                const module = this.userModule;
                console.log(form.value);
                this.userService.saveUser(user)
                    .subscribe((data) => {
                        console.log(data);
                        module.id = data.uid;
                        this.moduleService.saveModule(module)
                            .subscribe((moduleData) => {
                                this.toast.typeSuccess('Saved', 'User Saved Successfully');
                                this.user = new User();
                                this.userModule = new UserModule();
                                this.form.reset();
                                this.loading = false;
                            }, (response) => {
                                this.toast.typeError('Error', 'Error while saving user');
                            });
                    }, (response) => {
                    });
            } else if (this.action === 'list') {
                const user = this.user;
                const userModule = this.userModule;
                user.id = this.id;
                if (this.submitActionName === 'update') {
                    this.loading = true;
                    this.userService.updateUser(user)
                        .subscribe((data) => {
                            userModule.id = this.id;
                            this.moduleService.updateModule(userModule)
                                .subscribe((moduleData) => {
                                    this.toast.typeSuccess('Updated', 'User Updated Successfully');
                                    this.userService.updateTableEventEmitter.emit();
                                    this.loading = false;
                                    this.cancel();
                                }, (response) => {
                                    this.toast.typeError('Error', 'Error while updating user');
                                });
                        }, (response) => {
                        });
                } else if (this.submitActionName === 'delete') {
                    this.loading = true;
                    this.userService.deleteUser(user)
                        .subscribe((data) => {
                            userModule.id = user.id;
                            this.moduleService.deleteModule(this.userModule)
                                .subscribe((data) => {
                                    this.toast.typeSuccess('Deleted', 'User Successfully Deleted');
                                    this.userService.updateTableEventEmitter.emit();
                                    this.loading = false;
                                    this.form.reset();
                                    this.cancel();
                                }, (response) => {
                                });
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
                            this.form.reset();
                        }, (response) => {
                        });
                } else if (this.submitActionName === 'enable') {
                    this.loading = true;
                    this.userService.enableUser(user)
                        .subscribe((data) => {
                            this.toast.typeSuccess('Updated', 'User Enabled Successfully');
                            this.userService.updateTableEventEmitter.emit();
                            this.loading = false;
                            this.form.reset();
                            this.cancel();
                        }, (response) => {
                        });
                }
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
        this.submit(this.form, "");
    }

    setAction(id: string, action: string) {
        this.id = id;
        this.action = action;
        this.loadData();
    }

    private loadData() {
        if (this.action) {
            if (this.action !== 'new' && this.id) {
                this.loading = true;
                this.userService.getUser(this.id)
                    .subscribe((user: User) => {
                        this.user = user;
                        this.disabled = user.disabled;
                        this.moduleService.getModule(this.id)
                            .subscribe((module: UserModule) => {
                                this.userModule = module;
                                this.loading = false;
                            }, () => this.cancel());
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
