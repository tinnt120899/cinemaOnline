import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListPhimService} from '../../service/list-phim.service';
import {ListRapService} from '../../service/list-rap.service';
import {Globals} from '../../service/globals.service';
import {LichChieuService} from '../../service/lich-chieu.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./seat-map.component.scss']
})
export class BookTicketComponent implements OnInit {
  @Output() private pushListTenGhe = new EventEmitter<Array<string>>();
  @Output() private pushListTrangThai = new EventEmitter<Array<string>>();
  @Input() gheSelected = [];
  @Input() giaVe: string;
  listPhim: {};
  listRap: {};
  listNgayChieu: {};
  listSuatChieu: {};
  listSeatMap: {};
  listTenGhe = [];
  ten: string;
  idPhim: string;
  idSuatChieu: string;
  idSeatMap: string;
  hang: number;
  viTri: number;

  constructor(private listPhimService: ListPhimService,
              private listRapService: ListRapService,
              private lichChieuService: LichChieuService,
              private globals: Globals) {
  }

  ngOnInit() {
    this.listRapService.getListRapById(this.globals.idRap).subscribe(res => {
      this.listRap = res;
      console.log(res);
    });

    this.listPhimService.getThongTinPhim(this.globals.idListPhim).subscribe(res => {
      this.listPhim = res;
      console.log(res);
      // @ts-ignore
      this.lichChieuService.getNgayChieu(this.listPhim.idPhim).subscribe(res2 => {
        this.listNgayChieu = res2;
        console.log(res2);
      });
    });
  }

  getSuatChieu(idSuatChieu: string) {
    console.log(idSuatChieu);
    this.lichChieuService.getSuatChieu(idSuatChieu).subscribe(res => {
      this.listSuatChieu = res;
      console.log(res);
    });
  }

  getSeatMap(idSeatMap: string) {
    this.lichChieuService.getSeatMap(idSeatMap).subscribe(res => {
      this.listSeatMap = res;
      console.log(res);
      // @ts-ignore
      const trangThaiGhe = res.trangThaiGhe;
      this.pushListTrangThai.emit(trangThaiGhe);
      trangThaiGhe.forEach((item, index) => {
        // @ts-ignore
        this.hang = Math.floor(index / 8);
        this.viTri = index % 8 + 1;
        this.ten = String.fromCharCode(this.hang + 65) + this.viTri.toString();
        this.listTenGhe.push(this.ten);
      });
      this.pushListTenGhe.emit(this.listTenGhe);
    });
 }
}
