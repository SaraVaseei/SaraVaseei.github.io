/**
 * Created by Sarah on 7/7/2018.
 */
import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './NavContainer.component.html',
    styleUrls: ['NavContainer.component.scss']
})
export class NavContainer {
    public userName:string;
    constructor() {
    // console.log('hiiii');
    }
}
