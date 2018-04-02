import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import {Subscriber} from 'rxjs/Subscriber';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {UserService} from "../../services/user.service";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

    @ViewChild('dateTimeTmpl')
    private dateTimeTmpl: TemplateRef<any>;
    @ViewChild('trueFalseTmpl')
    private trueFalseTmpl: TemplateRef<any>;
    @ViewChild('falseTrueTmpl')
    private falseTrueTmpl: TemplateRef<any>;
    @ViewChild('userTypeTmpl')
    private userTypeTmpl: TemplateRef<any>;
    @ViewChild('notAvailableTmpl')
    private notAvailableTmpl: TemplateRef<any>;
    @ViewChild(DatatableComponent)
    private table: DatatableComponent;

    rows = [];
    temp = [];
    columns = [];
    title: string;

    private tableUpdaterSubscriber: Subscriber<void>;
    private action: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private userService: UserService) {
    }

    //First function when loading the User list UI
    ngOnInit() {
        this.route.url.subscribe((url) => {
            this.setAction(url[url.length - 1].path)
        });
        this.tableUpdaterSubscriber = this.userService.updateTableEventEmitter.subscribe(() => {
            this.setAction(this.route.snapshot.url[this.route.snapshot.url.length - 1].path);
        });
    }

    //Unsubscribe table updates when leaving from the view
    ngOnDestroy(): void {
        this.tableUpdaterSubscriber.unsubscribe();
    }

    //Select the user and navigate
    onRowSelect(selectedRow) {
        this.router.navigate([selectedRow.selected[0].id], {relativeTo: this.route});
    }

    //Set the title
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
                },
                {
                    prop: 'userType',
                    name: 'User Type',
                    cellTemplate: this.userTypeTmpl
                },
                {
                    prop: 'disabled',
                    name: 'User Disabled',
                    cellTemplate: this.trueFalseTmpl
                },
                {
                    prop: 'emailVerified',
                    name: 'Email Verified',
                    cellTemplate: this.falseTrueTmpl
                },
                {
                    prop: 'firstLogin',
                    name: 'First Login',
                    cellTemplate: this.falseTrueTmpl
                },
                {
                    prop: 'lastSignInTime',
                    name: 'Last Sign-in Time',
                    cellTemplate: this.dateTimeTmpl

                },
                {
                    prop: 'creationTime',
                    name: 'Creation Time',
                    cellTemplate: this.dateTimeTmpl
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
        this.title = 'Users List';
    }

}
