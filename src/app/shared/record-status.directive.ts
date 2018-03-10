import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appRecordStatus]'
})
export class RecordStatusDirective implements AfterViewInit {

    constructor(private renderer: Renderer2, private el: ElementRef) {
    }

    ngAfterViewInit() {
        const value = this.el.nativeElement.innerHTML;
        const badge = this.renderer.createElement('span');
        this.renderer.addClass(badge, 'badge');
        this.renderer.addClass(badge, this.getClass(value));
        this.renderer.setProperty(badge, 'innerHTML', value);
        this.renderer.setProperty(this.el.nativeElement, 'innerHTML', '');
        this.renderer.appendChild(this.el.nativeElement, badge);
    }

    getClass(value) {
        switch (value.toUpperCase()) {
            case 'NEW':
            case 'AUTHORIZED':
                return 'badge-success';
            case 'MODIFIED':
                return 'badge-warning';
            case 'DELETED':
            case 'REJECTED':
                return 'badge-danger';
        }
    }
}
