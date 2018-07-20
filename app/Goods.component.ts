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
    public brandsAreOpened = false;
    public colorsAreOpened = false;
    public categoriesNamesAreOpened = false;
    public categoriesNamesAreOpened1 = false;
    public categoriesNamesAreOpened2 = false;
    public categoriesNamesAreOpened3 = false;
    public categoriesNamesAreOpened4 = false;
    public categoriesNamesAreOpened5 = false;
    toggleCategories(){
        this.categoriesAreOpened = ! this.categoriesAreOpened;
    }
    toggleBrands(){
        this.brandsAreOpened = ! this.brandsAreOpened;
    }
    toggleColors(){
        this.colorsAreOpened = ! this.colorsAreOpened;
    }
    toggleCategoriesNames(){
        this.categoriesNamesAreOpened = ! this.categoriesNamesAreOpened;
    }
    toggleCategoriesNames1(){
        this.categoriesNamesAreOpened1 = ! this.categoriesNamesAreOpened1;
    }
    toggleCategoriesNames2(){
        this.categoriesNamesAreOpened2 = ! this.categoriesNamesAreOpened2;
    }
    toggleCategoriesNames3(){
        this.categoriesNamesAreOpened3 = ! this.categoriesNamesAreOpened3;
    }
    toggleCategoriesNames4(){
        this.categoriesNamesAreOpened4 = ! this.categoriesNamesAreOpened4;
    }
    toggleCategoriesNames5(){
        this.categoriesNamesAreOpened5 = ! this.categoriesNamesAreOpened5;
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