import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ToastrService} from "../../shared/toastr/toastr.service";
import {ModuleService} from "../../services/user-module.service";
import {UserService} from "../../services/user.service";

@Component({
    selector: 'app-module-form',
    templateUrl: './module-form.component.html',
    styleUrls: ['./module-form.component.scss']
})
export class ModuleFormComponent implements OnInit {

    title: string;
    id: number;
    action: string;
    submitActionName: string;
    loading: boolean = false;
    moduleCode: string;
    validationMessages = {
        moduleCode: {
            'required': 'Module Code cannot be empty',
            'maxlength': 'Module Code cannot contain more than 50 characters'
        }
    };
    @ViewChild('f')
    private form: NgForm;

    constructor(protected router: Router,
                protected route: ActivatedRoute,
                private moduleService: ModuleService,
                private userService: UserService,
                private toast: ToastrService) {
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            const parentUrl = this.route.parent.snapshot.url[this.route.parent.snapshot.url.length - 1];
            const action: string = parentUrl ? parentUrl.path : 'new';
            this.setAction(params['id'], action);
        });
    }

    submit(form, event) {

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

    private loadData() {

    }

}
