import { Component, OnInit } from '@angular/core';
import {ListPhimService} from '../../../service/list-phim.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {
  thongTinPhim: {};
  constructor(private listPhimService: ListPhimService) { }

  ngOnInit() {
    console.log(window.location.pathname.replace('/thongtinphim/', ''));
    this.listPhimService.getThongTinPhim(window.location.pathname.replace('/thongtinphim/', '')).subscribe(res =>{
      this.thongTinPhim = res[0];
      console.log(this.thongTinPhim);
    });
  }

}
