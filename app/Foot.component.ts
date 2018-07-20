/**
 * Created by Sarah on 7/8/2018.
 */
import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-foot',
    templateUrl: './Foot.component.html',
    styleUrls: ['Foot.component.scss']
})
export class FootComponent {
    public userName:string;

    constructor() {
        // console.log('hiiii');
    }
}
