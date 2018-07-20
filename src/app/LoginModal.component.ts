/**
 * Created by Sarah on 7/7/2018.
 */
import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './LoginModal.component.html',
    styleUrls: ['LoginModal.component.scss']
})
export class LoginModalComponent {
    public userName:string;
    constructor() {
        // console.log('hiiii');
    }
}
