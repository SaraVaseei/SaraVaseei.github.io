/**
 * Created by Sarah on 7/7/2018.
 */
import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-goods',
    templateUrl: './Goods.component.html',
    styleUrls: ['Goods.component.scss']
})
export class GoodsComponent {
    public userName:string;
    public categoriesAreOpened = false;
    public categoriesNamesAreOpened1 = false;
    public categoriesNamesAreOpened2 = false;
    public categoriesNamesAreOpened3 = false;
    public categoriesNamesAreOpened4 = false;
    public categoriesNamesAreOpened5 = false;
    toggleCategories(){
        this.categoriesAreOpened = ! this.categoriesAreOpened;
    }
    toggleCategoriesNames(){
        this.categoriesNamesAreOpened1 = ! this.categoriesNamesAreOpened1;
    }

    toggle(vari: boolean){
        console.log('before', vari);
        vari = ! vari;
        console.log('after', vari);
    }
    constructor() {
        // console.log('hiiii');
    }
}