import { Component, OnInit } from '@angular/core';
import {ListPhimService} from '../../../service/list-phim.service';

@Component({
  selector: 'app-wrapmovie',
  templateUrl: './wrapmovie.component.html',
  styleUrls: ['./wrapmovie.component.scss'],

})
export class WrapmovieComponent implements OnInit {
 listRap: {};
  constructor(private listPhimService: ListPhimService) {}

  ngOnInit() {
  this.listPhimService.getSuatChieuPhim(window.location.pathname.replace('/', '')).subscribe(res => {
      this.listRap = res;
      console.log(this.listRap);
    // @ts-ignore
      console.log(this.listRap[0].srcImageSm);
    });
  }

}
