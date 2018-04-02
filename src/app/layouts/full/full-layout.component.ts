import {Component, ElementRef, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFireAuth} from "angularfire2/auth";

var fireRefreshEventOnWindow = function () {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent('resize', true, false);
    window.dispatchEvent(evt);
};

@Component({
    selector: 'app-full-layout',
    templateUrl: './full-layout.component.html',
    styleUrls: ['./full-layout.component.scss']
})

export class FullLayoutComponent implements OnInit {
    constructor(private elementRef: ElementRef, private router: Router, private route: ActivatedRoute, private angularFireAuth: AngularFireAuth) {
    }

    ngOnInit() {
        //sidebar toggle event listner
        this.elementRef.nativeElement.querySelector('#sidebarToggle')
            .addEventListener('click', this.onClick.bind(this));
    }

    onClick(event) {
        //initialize window resizer event on sidebar toggle click event
        setTimeout(() => {
            fireRefreshEventOnWindow()
        }, 300);
    }

}
