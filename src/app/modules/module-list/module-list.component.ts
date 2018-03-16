import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {Subscriber} from "rxjs/Subscriber";

@Component({
    selector: 'app-module-list',
    templateUrl: './module-list.component.html',
    styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit, OnDestroy {

    rows = [];
    temp = [];
    columns = [];
    title: string;
    @ViewChild('notAvailableTmpl')
    private notAvailableTmpl: TemplateRef<any>;
    private tableUpdaterSubscriber: Subscriber<void>;
    private action: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private userService: UserService) {

    }

    ngOnInit() {
        this.route.url.subscribe((url) => {
            this.setAction(url[url.length - 1].path)
        });
        this.tableUpdaterSubscriber = this.userService.updateTableEventEmitter.subscribe(() => {
            this.setAction(this.route.snapshot.url[this.route.snapshot.url.length - 1].path);
        });
    }

    ngOnDestroy(): void {
        this.tableUpdaterSubscriber.unsubscribe();
    }

    onRowSelect(selectedRow) {
        this.router.navigate([selectedRow.selected[0].id], {relativeTo: this.route});
    }

    private setAction(action) {
        this.action = action;
        if (this.action) {
            this.loadData();
            this.columns = [
                {
                    prop: 'displayName',
                    name: 'Display Name',
                    cellTemplate: this.notAvailableTmpl
                },
                {
                    prop: 'email',
                    name: 'Email'
                },
                {
                    prop: 'phoneNumber',
                    name: 'Phone Number',
                    cellTemplate: this.notAvailableTmpl
                }
            ];
        }
    }

    private loadData() {
        this.userService.getUserList()
            .subscribe((data) => {
                this.temp = data;
                this.rows = this.temp;
                console.log(this.rows);
            });
        this.title = 'Select User to View Module Details';
    }
}
