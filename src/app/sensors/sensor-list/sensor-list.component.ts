import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {InventoryService} from "../../services/inventory.service";
import {Subscriber} from "rxjs/Subscriber";
import {ActivatedRoute, Router} from "@angular/router";
import {IOption} from "ng-select";
import jsPDF = require("jspdf");

@Component({
    selector: 'app-sensor-list',
    templateUrl: './sensor-list.component.html',
    styleUrls: ['./sensor-list.component.scss']
})
export class SensorListComponent implements OnInit, OnDestroy {

    @ViewChild('printable')
    content: ElementRef;

    rows = [];
    temp = [];
    columns = [];
    batches: Array<IOption>;
    selctedBatch: string;
    title: string;

    validationMessages = {
        batches: {
            'required': 'Batch Number is required'
        }
    };

    private tableUpdaterSubscriber: Subscriber<void>;
    private action: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private inventoryService: InventoryService) {

    }

    ngOnInit() {
        this.route.url.subscribe((url) => {
            this.setAction(url[url.length - 1].path)
        });
        this.tableUpdaterSubscriber = this.inventoryService.updateTableEventEmitter.subscribe(() => {
            this.setAction(this.route.snapshot.url[this.route.snapshot.url.length - 1].path);
        });
        this.inventoryService.getSensorBatches()
            .subscribe((batches) => {
                const list: Array<IOption> = [];
                batches.forEach((batch) => {
                    list.push({value: '' + batch, label: 'Batch ' + batch})
                });
                this.batches = list;
            });
    }

    ngOnDestroy(): void {
        this.tableUpdaterSubscriber.unsubscribe();
    }

    onRowSelect(selectedRow) {
        this.router.navigate([selectedRow.selected[0].id], {relativeTo: this.route});
    }

    batchChanged(event) {
        this.inventoryService.getSensorsList(event.value)
            .subscribe((data) => {
                this.temp = data;
                this.rows = this.temp;
            });
    }

    generatePdf() {
        let doc = new jsPDF();

        let specialElementHandlers = {
            '#editor': function (element, renderer) {
                return true;
            }
        };

        let content = this.content.nativeElement;

        doc.fromHTML(content.innerHTML, 15, 15, {
            'width': 190,
            'elementHandlers': specialElementHandlers
        });

        doc.save('electrimate-module-qr-batch-' + this.rows[0].batchNumber + '.pdf');
    }

    private setAction(action) {
        this.action = action;
        if (this.action) {
            this.columns = [

                {
                    prop: 'batchNumber',
                    name: 'Batch Number'
                },
                {
                    prop: 'id',
                    name: 'Sensor ID'
                }
            ];
        }
    }

}
