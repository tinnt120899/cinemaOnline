import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListPhimService} from '../../service/list-phim.service';
import {ListRapService} from '../../service/list-rap.service';
import {Globals} from '../../service/globals.service';
import {LichChieuService} from '../../service/lich-chieu.service';
import {SentgmailService} from '../../service/sentgmail.service';

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
  hang: number;
  viTri: number;

  tenPhim: string;
  tenRap: string;
  gmail: string;
  noiDung: string ;
  constructor(private listPhimService: ListPhimService,
              private listRapService: ListRapService,
              private lichChieuService: LichChieuService,
              private globals: Globals,
              private gmailService: SentgmailService) {
  }

  ngOnInit() {
    this.listRapService.getListRapById(this.globals.idRap).subscribe(res => {
      this.listRap = res;
      // @ts-ignore
      this.tenRap = this.listRap.tenRap;
      console.log(this.tenRap);
    });

    this.listPhimService.getThongTinPhim(this.globals.idListPhim).subscribe(res => {
      this.listPhim = res;
      // @ts-ignore
      this.tenPhim = this.listPhim.tenPhim;
      console.log(this.tenPhim);
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

  sentmail() {
    this.noiDung = 'Chúc mừng bạn đã đặt thành công vé, hãy quét QR tại quầy để xác nhận trước khi xem phim, cảm ơn bạn!!!'
    this.gmailService.sentgmail(this.gmail, this.noiDung).subscribe(res => {
      console.log(res);
    });
  }

  getEmail(value: string) {
    this.gmail = value;
    console.log(this.gmail);
  }

}
