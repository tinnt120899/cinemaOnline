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
      linkName: 'https://s3img.vcdn.vn/123phim/2019/12/giang-sinh-nam-ay-last-christmas-c13-15756165756802.jpg',
      linkTrailer: 'U-8tYGeGSXs'
    },
    {
      linkName: 'https://s3img.vcdn.vn/123phim/2019/12/ke-du-hanh-tren-may-the-aeronauts-c13-15755311166243.jpg',
      linkTrailer: 'U-8tYGeGSXs'
    },
    {
      linkName: 'https://s3img.vcdn.vn/123phim/2019/12/tro-choi-ky-ao-thang-cap-jumanji-the-next-level-c13-15757119319107.jpg',
      linkTrailer: 'U-8tYGeGSXs'
    },
    {
      linkName: 'https://s3img.vcdn.vn/123phim/2019/11/cong-chua-nho-cua-ba-a-little-princess-15750099377186.jpg',
      linkTrailer: 'U-8tYGeGSXs'
    },
    {
      linkName: 'https://s3img.vcdn.vn/123phim/2019/12/chi-chi-em-em-sister-sister-c18-15757119969969.jpg',
      linkTrailer: 'U-8tYGeGSXs'
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
