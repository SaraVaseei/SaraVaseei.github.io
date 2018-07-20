/**
 * Created by Sarah on 7/7/2018.
 */
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {Http, Request, RequestOptions, RequestMethod, URLSearchParams} from '@angular/http';

@Component({
    selector: 'app-login',
    templateUrl: './LoginModal.component.html',
    styleUrls: ['LoginModal.component.scss'],
    animations: [
        trigger('dialog', [
            transition('void => *', [
                style({transform: 'scale3d(.3, .3, .3)'}),
                animate(200)
            ]),
            transition('* => void', [
                animate(100, style({transform: 'scale3d(.05, .05, .05)'}))
            ])
        ])
    ]
})
export class LoginModalComponent {
    data: any;
    @Input() closable = true;
    @Input() visible: boolean;
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    constructor() {
    }
    close() {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }
}
