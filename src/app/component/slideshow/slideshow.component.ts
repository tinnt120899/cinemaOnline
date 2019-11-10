import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
// declare var jquery: any;
// declare var $: any;



@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})

export class SlideShowComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {

  }
  linkImg: any = [
    {
      linkName: 'https://s3img.vcdn.vn/123phim/2019/11/3d-15728436812590.jpg',
      linkTrailer: 't7srZZh9lxY'
    },
    {
      linkName: 'https://s3img.vcdn.vn/123phim/2019/09/ca-map-15695574190123.jpg',
      linkTrailer: 'Zw7z6O9JeYE'
    },
    {
      linkName: '../../assets/img/header/giai-ma-bi-an-ngan-ha.jpg',
      linkTrailer: 't7srZZh9lxY'
    },
    {
      linkName: '../../assets/img/header/sat-thu-anna.jpg',
      linkTrailer: 'Zw7z6O9JeYE'
    },
    {
      linkName: '../../assets/img/header/tru-tien.jpg',
      linkTrailer: 't7srZZh9lxY'
    }

];

  link: string;
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
    this.link = 'https://www.youtube.com/embed/' + this.linkImg[0].linkTrailer;

    // $('.owl-carousel').owlCarousel({
    //   loop: true,
    //   margin: 10,
    //   nav: true,
    //   responsive: {
    //     1080: {
    //       items: 1
    //     },
    //     1920: {
    //       items: 1
    //     },
    //   }
    // });
  }

}
