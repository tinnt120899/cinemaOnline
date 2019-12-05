import {Component, OnInit} from '@angular/core';
import {Globals} from '../../service/globals.service';

declare var $: any;

@Component({
  selector: 'app-seat-map',
  templateUrl: './seat-map.component.html',
  styleUrls: ['./seat-map.component.scss']
})
export class SeatMapComponent implements OnInit {
  listTenGhe = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8',
    'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8',
    'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8',
    'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8',
    'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8',
    'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8',
    'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8',
    'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8',
    'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8',
    'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8'];
  loaiGhe = [0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 0,
    0, 1, 1, 1, 1, 1, 1, 0,
    0, 1, 1, 1, 1, 1, 1, 0,
    0, 1, 1, 1, 1, 1, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0];
  listTrangThai = [];
  gheSelected: Array<string>;
  color: string;
  a: number;
  b: number;
  giaVe = 0;

  constructor(private globals: Globals) {
  }

  ngOnInit() {
    this.gheSelected = [];
  }

  maxRow(max: number) {
    return Array(max);
    console.log(Array(max));
  }

  getListTenGhe(ten: Array<string>) {
    this.listTenGhe = ten;
  }

  getListTrangThai(trangThai: Array<string>) {
    trangThai.forEach((item, index) => {
      // tslint:disable-next-line:triple-equals
      item == '0' ? this.listTrangThai.push(false) : this.listTrangThai.push(true);
    });
  }

  getGhe(id: string, ten: string) {
    this.color = window.getComputedStyle(document.getElementById(id), null).getPropertyValue('background')
      .toString().replace(' none repeat scroll 0% 0% / auto padding-box border-box', '');
    console.log(this.color);
    this.color === 'rgb(30, 144, 255)' || this.color === 'rgb(255, 255, 0)' ? this.a = 1 : this.a = 0;
    this.a === 0 ? this.gheSelected.push(ten) : this.gheSelected.splice(this.gheSelected.indexOf(ten), 1);

    switch (this.color) {
      case 'rgb(30, 144, 255)':
        this.giaVe -= 60000;
        break;
      case 'rgb(255, 255, 0)':
        this.giaVe -= 80000;
        break;
      case 'rgb(128, 128, 128)':
        this.giaVe += 60000;
        break;
      case 'rgb(246, 229, 141)':
        this.giaVe += 80000;
        break;
    }
    console.log(this.giaVe);
  }
}
