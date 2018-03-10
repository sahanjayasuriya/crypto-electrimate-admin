import { ActivatedRoute, Router } from '@angular/router';

export class FormComponent {

    action: string;
    submitActionName: string;
    title: string;
    loading: boolean = false;
    rejectReason: string;

    constructor(protected router: Router, protected route: ActivatedRoute) {

    }

    canViewButton(action) {
        return this.action === action;
    }

    cancel() {
        this.router.navigate(['../'], {relativeTo: this.route})
    }

    submitAction(action: string, value: any) {
        this.submitActionName = action;
        this.rejectReason = value.value;
    }
}
