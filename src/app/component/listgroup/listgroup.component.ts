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

  constructor(private globals: Globals, private heThongRapService: HeThongRapService) {
  }

  ngOnInit() {
    this.ChangeTinhThanh('hcm');
   }


  ChangeTinhThanh(tinhThanh: string) {
    this.tinhThanh = tinhThanh;
    this.heThongRapService.getHeThongRap(this.tinhThanh).subscribe(res => {
      this.listCinema = res;
    });
    if ( tinhThanh === 'hcm') {
      return this.tinhThanhDropdown = 'Hồ Chí Minh';
    } else if ( tinhThanh === 'hn') {
      return this.tinhThanhDropdown = 'Hà Nội';
    } else if ( tinhThanh === 'cm') {
      return this.tinhThanhDropdown = 'Cà Mau';
    }
  }

  click($event) {
    // tslint:disable-next-line:no-console
    this.routeName = $event;
  }
}
