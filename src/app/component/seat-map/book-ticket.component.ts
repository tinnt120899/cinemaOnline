import { Component, OnInit } from '@angular/core';
import {ListPhimService} from '../../service/list-phim.service';
import {ListRapService} from '../../service/list-rap.service';
import {Globals} from '../../service/globals.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./seat-map.component.scss']
})
export class BookTicketComponent implements OnInit {
  listPhim: {};
  listRap: {};

  constructor( private listPhimService: ListPhimService,
               private listRapService: ListRapService,
               private globals: Globals) { }
  ngOnInit() {
    this.listRapService.getListRapById(this.globals.idRap).subscribe(res => {
      this.listRap = res[0];
      // @ts-ignore
      console.log(this.listRap);
    });

    this.listPhimService.getThongTinPhim(this.globals.idSuatChieu).subscribe(res => {
      this.listPhim = res[0];
      // @ts-ignore
      console.log(this.listPhim);
    });
  }
}
