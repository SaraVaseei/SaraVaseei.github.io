import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './Home.component';
import {DetailComponent} from './Detail.component';
import {ProfileComponent} from './Profile.component';
import {CartComponent} from './Cart.component';
import {GoodsComponent} from './Goods.component';
import {LoginModalComponent} from './LoginModal.component';
import {AppComponent} from './app.component';
import {NavContainer} from "./NavContainer.component";
import { SliderModule } from 'angular-image-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FootComponent} from "./Foot.component";
// import { CarouselModule } from 'angular4-carousel';
const routes:Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    // { path: 'formationList',  component: FormationListComponent, pathMatch: 'full' }
    {path: 'detail/:id', component: DetailComponent, pathMatch: 'full'}
    , {path: 'Profile/:databaseId', component: ProfileComponent, pathMatch: 'full'}
    , {path: 'cart', component: CartComponent, pathMatch: 'full'}
    , {path: 'goods', component: GoodsComponent, pathMatch: 'full'}
];
@NgModule({
    declarations: [
        AppComponent, HomeComponent, DetailComponent, ProfileComponent, CartComponent, GoodsComponent, LoginModalComponent, NavContainer, FootComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        SliderModule,
        BrowserAnimationsModule,
        // CarouselModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
