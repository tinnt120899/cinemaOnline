import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ListPhimService} from '../../../service/list-phim.service';

@Component({
  selector: 'app-wrapmovie',
  templateUrl: './wrapmovie.component.html',
  styleUrls: ['./wrapmovie.component.scss'],

})
export class WrapmovieComponent implements OnInit, OnChanges {
  @Input() routeName: string;
  listRap: {};
  lengthList: number;
  constructor(private listPhimService: ListPhimService) {}

  ngOnInit() {
  this.listPhimService.getSuatChieuPhim(this.routeName).subscribe(res => {
      this.listRap = res;
      console.log(this.listRap);
      this.lengthList = Object.keys(this.listRap).length;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.listPhimService.getSuatChieuPhim(this.routeName).subscribe(res => {
      this.listRap = res;
      // tslint:disable-next-line:no-console
      console.log(this.listRap);
      this.lengthList = Object.keys(this.listRap).length;
    });
  }

}
