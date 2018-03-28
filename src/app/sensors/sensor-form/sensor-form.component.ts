import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {InventoryService} from "../../services/inventory.service";
import {ToastrService} from "../../shared/toastr/toastr.service";
import {NgForm} from "@angular/forms";
import {Sensors} from "../sensor-metadata";

@Component({
    selector: 'app-sensor-form',
    templateUrl: './sensor-form.component.html',
    styleUrls: ['./sensor-form.component.scss']
})
export class SensorFormComponent implements OnInit {

    title: string;
    id: number;
    loading: boolean = false;
    sensors: Sensors;
    validationMessages = {
        batchNumber: {
            'required': 'Batch Number cannot be empty',
            'maxlength': 'Batch Number cannot contain more than 4 characters'
        },
        sensorCount: {
            'required': 'Number of Sensors cannot be empty',
            'maxlength': 'Number of Sensors cannot contain more than 6 characters'
        }
    };
    @ViewChild('f')
    private form: NgForm;

    constructor(protected router: Router,
                protected route: ActivatedRoute,
                private inventoryService: InventoryService,
                private toast: ToastrService) {
    }

    ngOnInit() {
        this.sensors = new Sensors();
        this.route.params.subscribe((params: Params) => {
        });
    }

    submit(form, event) {
        this.loading = true;
        const sensors = this.sensors;
        this.inventoryService.saveSensors(sensors)
            .subscribe((data) => {
                console.log(data);
                this.toast.typeSuccess('Saved', 'Sensors Saved Successfully');
                this.loading = false;
                this.form.reset();
            });
    }

    cancel() {
        this.router.navigate(['../'], {relativeTo: this.route})
    }

}
