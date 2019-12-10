import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ListPhimService} from '../../../service/list-phim.service';
import {Globals} from '../../../service/globals.service';

@Component({
  selector: 'app-wrapmovie',
  templateUrl: './wrapmovie.component.html',
  styleUrls: ['./wrapmovie.component.scss'],

})
export class WrapmovieComponent implements OnInit, OnChanges {
  @Input() routeName: string;
  listRap: {};
  lengthList: number;
  constructor(private listPhimService: ListPhimService,
              private globals: Globals) {}

  ngOnInit() {
  this.listPhimService.getSuatChieuPhim(this.routeName).subscribe(res => {
      this.listRap = res;
      console.log(res);
      this.lengthList = Object.keys(this.listRap).length;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.listPhimService.getSuatChieuPhim(this.routeName).subscribe(res => {
      this.listRap = res;
      this.lengthList = Object.keys(this.listRap).length;
    });
  }

  getId(id: string) {
    this.globals.idListPhim = id;
    console.log(id);
  }
}
