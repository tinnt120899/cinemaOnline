import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Globals} from '../../service/globals.service';
import {HeThongRapService} from '../../service/he-thong-rap.service';

@Component({
  selector: 'app-listgroup',
  templateUrl: './listgroup.component.html',
  styleUrls: ['./listgroup.component.scss']
})
export class ListGroupComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  listCinema: Object;
  tinhThanh: string;
  tinhThanhDropdown: string;
  routeName: string;
  danhSachTinhThanh = this.globals.listCity;

  constructor(private globals: Globals, private heThongRapService: HeThongRapService) {
  }

  ngOnInit() {
    this.ChangeTinhThanh('TP Hồ Chí Minh');
   }


  ChangeTinhThanh(tinhThanh: string) {
    this.tinhThanh = tinhThanh;
    console.log(tinhThanh)
    this.heThongRapService.getHeThongRap(this.tinhThanh).subscribe(res => {
      this.listCinema = res;
      console.log(res);
    });
  }

  click($event) {
    // tslint:disable-next-line:no-console
    this.routeName = $event;
  }
}
