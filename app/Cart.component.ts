/**
 * Created by Sarah on 7/7/2018.
 */
import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-cart',
    templateUrl: './Cart.component.html',
    styleUrls: ['Cart.component.scss']
})
export class CartComponent {
    public userName:string;
    public state = 2;
    constructor() {
        // console.log('hiiii');
    }
    changeState() {
        this.state ++;
    }
}
