import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    exportAs: 'app-modal'
})
export class ModalComponent implements OnInit {

    @ViewChild('modalX')
    private modalX: ModalDirective;

    @Input()
    type: string;
    @Input()
    title: string;
    @Input()
    content: string;
    @Input()
    cancelBtnText: string;
    @Input()
    confirmBtnText: string;

    @Output('onConfirm')
    private confirmEventEmitter = new EventEmitter<{ value: string }>();

    constructor() {
    }

    ngOnInit() {
    }

    public hide(): void {
        this.modalX.hide();
    }

    public show(): void {
        this.modalX.show();
    }

    doPostAction() {
        this.confirmEventEmitter.emit();
        this.hide();
    }

}
