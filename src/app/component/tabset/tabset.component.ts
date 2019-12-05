import {Component, OnInit} from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import {ListPhimService} from '../../service/list-phim.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.css']
})
export class TabsetComponent implements OnInit {
  list: object = {
    itemsPerPage: 8,
    listPhim: [],
    totalPage: 0
  };
  listPhim: {};
  fasearch = faSearch;

  constructor(config: NgbTabsetConfig, private listPhimService: ListPhimService) {
    // customize default values of tabsets used by this component tree
    config.justify = 'center';
    config.type = 'pills';
  }

  ngOnInit() {
    this.listPhimService.getListPhim().subscribe(res => {
      // @ts-ignore
        this.list.listPhim = res;
      });
    // this.listPhimService.getTinhThanh('hochiminh').subscribe(res => {
    //   // @ts-ignore
    //   this.list.listPhim = res;
    //   // @ts-ignore
    //   console.log(this.list.listPhim);
    // });
  }

  InRange(end: number) {
    return Array(end);
  }

  getId(id: any[]) {
    return id;
  }
}
