/**
 * Created by Sarah on 7/7/2018.
 */
import {Component, Input, OnInit, Output} from '@angular/core';
// import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
// import { ICarouselConfig, AnimationConfig } from '../services';

@Component({
    selector: 'app-home',
    templateUrl: './Home.component.html',
    styleUrls: ['Home.component.scss']
})
export class HomeComponent implements OnInit {
    public userName:string;
    public imagesUrl;
    public slideConfig;
    slideIndex = 1;

    public height = '700px';

    ngOnInit() {
        this.imagesUrl = [
            // '/assets/images/1.jpg',
            // '/assets/images/4.jpg',
            // '/assets/images/2.jpg',
            // '/assets/images/5.jpg',
            '/assets/images/7.jpeg',
            '/assets/images/8.jpeg'

        ];
        this.slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};


        this.showDivs(this.slideIndex);


    }



    plusDivs(n) {
        this.showDivs(this.slideIndex += n);
    }



    currentDiv(n) {
        this.showDivs(this.slideIndex = n);
    }



    showDivs(n) {
        let i;
        let x = document.getElementsByClassName("mySlides");

        let dots = document.getElementsByClassName("demo");
        if (n > x.length) {
            this.slideIndex = 1
        }
        if (n < 1) {
            this.slideIndex = x.length
        }
        for (i = 0; i < x.length; i++) {

            // (x[i] as HTMLElement).style.display = "none";
            x[i]['style'].display = "none";
            // console.log(x[i]);
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" w3-white", "");
        }
        x[this.slideIndex - 1]['style'].display = "block";
        dots[this.slideIndex - 1].className += " w3-white";
    }

    constructor() {
        // console.log('hiiii');
    }
}
