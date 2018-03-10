import { Component, Input } from '@angular/core';

@Component({
    selector: 'validation',
    template: `
    <p class="help-block" style="font-size: 0.8rem" *ngFor="let message of messages" [innerHTML]="message"></p>
  `,
    styles: []
})
export class ValidationComponent {
    @Input() messages: Array<string>;
}
