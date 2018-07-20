/**
 * Created by Sarah on 7/7/2018.
 */
import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-detail',
    templateUrl: './Detail.component.html',
    styleUrls: ['Detail.component.scss']
})
export class DetailComponent {
    public userName:string;
    constructor() {
        // console.log('hiiii');
    }
}
