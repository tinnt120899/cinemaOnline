import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-listgroup',
  templateUrl: './listgroup.component.html',
  styleUrls: ['./listgroup.component.scss']
})
export class ListGroupComponent implements OnInit {
  listCinema: any = [
    {
      srcImage: 'https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png',
      id: 'a1',
      href: 'a01',
      nameList: 'bhd'
    },
    {
      srcImage: 'https://s3img.vcdn.vn/123phim/2018/09/e520781386bd5436e94d6e15e193a005.png',
      id: 'a2',
      href: 'a02',
      nameList: 'glx'
    },
    {
      srcImage: 'https://s3img.vcdn.vn/123phim/2018/09/1721cfa98768f300c03792e25ceb0191.png',
      id: 'a3',
      href: 'a03',
      nameList: 'cns'
    },
    {
      srcImage: 'https://s3img.vcdn.vn/123phim/2018/09/9b240f96a233bb43203ee514a21a6004.png',
      id: 'a4',
      href: 'a04',
      nameList: 'ddc'
    },
    {
      srcImage: 'https://s3img.vcdn.vn/123phim/2018/09/7b078639bd8fdb09dd83652d207c7b90.png',
      id: 'a5',
      href: 'a05',
      nameList: 'megags'
    },
    {
      srcImage: 'https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png',
      id: 'a6',
      href: 'a06',
      nameList: 'lotte'
    },
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
