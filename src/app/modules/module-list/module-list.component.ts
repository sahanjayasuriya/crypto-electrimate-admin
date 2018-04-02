import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscriber} from "rxjs/Subscriber";
import {InventoryService} from "../../services/inventory.service";
import {IOption} from "ng-select";
import jsPDF = require("jspdf");

@Component({
    selector: 'app-module-list',
    templateUrl: './module-list.component.html',
    styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit, OnDestroy {

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

    //First function when loading the module list UI
    ngOnInit() {
        this.route.url.subscribe((url) => {
            this.setAction(url[url.length - 1].path)
        });
        this.tableUpdaterSubscriber = this.inventoryService.updateTableEventEmitter.subscribe(() => {
            this.setAction(this.route.snapshot.url[this.route.snapshot.url.length - 1].path);
        });
        this.inventoryService.getModuleBatches()
            .subscribe((batches) => {
                const list: Array<IOption> = [];
                batches.forEach((batch) => {
                    list.push({value: '' + batch, label: 'Batch ' + batch})
                });
                this.batches = list;
            });
    }

    //Unsubscribe table updates when leaving from the view
    ngOnDestroy(): void {
        this.tableUpdaterSubscriber.unsubscribe();
    }

    //Select the module and navigate
    onRowSelect(selectedRow) {
        this.router.navigate([selectedRow.selected[0].id], {relativeTo: this.route});
    }

    //Display modules using selected Batch
    batchChanged(event) {
        this.inventoryService.getModulesList(event.value)
            .subscribe((data) => {
                this.temp = data;
                this.rows = this.temp;
            });
    }

    //Generate PDF
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

    //Set the Title
    private setAction(action) {
        this.action = action;
        if (this.action) {
            this.loadData();
            this.columns = [

                {
                    prop: 'batchNumber',
                    name: 'Batch Number'
                },
                {
                    prop: 'id',
                    name: 'Module ID'
                }
            ];
        }
    }

    private loadData() {
        this.title = 'Select User to View Module Details';
    }
}
