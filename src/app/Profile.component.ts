/**
 * Created by Sarah on 7/7/2018.
 */
import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './Profile.component.html',
    styleUrls: ['Profile.component.scss']
})
export class ProfileComponent {
    public userName:string;
    constructor() {
        // console.log('hiiii');
    }
}
