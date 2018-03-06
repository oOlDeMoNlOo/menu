import {Component, OnInit} from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-top',
    templateUrl: './top.component.html',
    styleUrls: ['./top.component.scss'],
    providers: [NgbDropdownConfig]
})
export class TopComponent implements OnInit {

    constructor(config: NgbDropdownConfig) {
        config.placement = 'top-left';
    }

    ngOnInit() {
    }

}
