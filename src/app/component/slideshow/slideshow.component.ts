import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})

export class SlideShowComponent implements OnInit {
  linkImg: any = [
    {linkName: '../../assets/img/header/ngay-hom-qua.jpg'},
    {linkName: 'https://s3img.vcdn.vn/123phim/2019/09/ca-map-15695574190123.jpg'},
    {linkName: '../../assets/img/header/giai-ma-bi-an-ngan-ha.jpg'},
    {linkName: '../../assets/img/header/sat-thu-anna.jpg'},
    {linkName: '../../assets/img/header/tru-tien.jpg'}

];
 constructor() {

  }

  ngOnInit() {
  }
}
