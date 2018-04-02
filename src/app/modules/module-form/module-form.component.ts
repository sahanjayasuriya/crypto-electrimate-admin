import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ToastrService} from "../../shared/toastr/toastr.service";
import {Modules} from "../module-metadata";
import {InventoryService} from "../../services/inventory.service";

@Component({
    selector: 'app-module-form',
    templateUrl: './module-form.component.html',
    styleUrls: ['./module-form.component.scss']
})
export class ModuleFormComponent implements OnInit {

    title: string;
    id: number;
    loading: boolean = false;
    modules: Modules;
    validationMessages = {
        batchNumber: {
            'required': 'Batch Number cannot be empty',
            'maxlength': 'Batch Number cannot contain more than 4 characters'
        },
        moduleCount: {
            'required': 'Number of Modules cannot be empty',
            'maxlength': 'Number of Modules cannot contain more than 6 characters'
        }
    };
    @ViewChild('f')
    private form: NgForm;

    constructor(protected router: Router,
                protected route: ActivatedRoute,
                private inventoryService: InventoryService,
                private toast: ToastrService) {
    }

    //First function when loading the module-form
    ngOnInit() {
        this.modules = new Modules();
        this.route.params.subscribe((params: Params) => {
        });
    }

    //Add modules
    submit(form, event) {
        this.loading = true;
        const modules = this.modules;
        this.inventoryService.saveModules(modules)
            .subscribe((data) => {
                console.log(data);
                this.toast.typeSuccess('Saved', 'Modules Saved Successfully');
                this.loading = false;
                this.form.reset();
            });
    }

    //Cancel adding modules
    cancel() {
        this.router.navigate(['../'], {relativeTo: this.route})
    }

}
